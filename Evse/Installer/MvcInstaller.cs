﻿using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using Evse.Data;
using Evse.Helpers;
using Evse.Helpers.AutoMapper;
using Evse.Models;
using System;
using System.Collections.Generic;

namespace Evse.Installer
{
    public class MvcInstaller : IInstaller
    {
        public void InstallServices(IServiceCollection services, IConfiguration configuration)
        {
            var connetionString = configuration.GetConnectionString("DefaultConnection");
            // Configure DbContext with Scoped lifetime   
            services.AddDbContext<EvseDataContext>(options =>
            {
                options.UseSqlServer(connetionString);
            });

            services.AddScoped<Func<EvseDataContext>>((provider) => () => provider.GetService<EvseDataContext>());
            services.AddResponseCaching();
            services.AddScoped<DbFactory>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped(typeof(IRepositoryBase<>), typeof(RepositoryBase<>));
            //var sp = services.BuildServiceProvider();
            //var context = (EvseContext)sp.GetService(typeof(EvseContext));
            //Helpers.DBInitializer.Seed(context);

            services
                .AddAutoMapper(typeof(Startup))
                .AddScoped<IMapper>(sp =>
                {
                    return new Mapper(AutoMapperConfig.RegisterMappings());
                })
                .AddSingleton(AutoMapperConfig.RegisterMappings());

            //Swagger
            services.AddSwaggerGen(x =>
            {
                x.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "Our KPI", Version = "v1" });

                var security = new Dictionary<string, IEnumerable<string>>
                {
                    {"Bearer", new string[0]}
                };
                x.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = "JWT Authorization header using the Bearer scheme. \r\n\r\n Enter 'Bearer' [space] and then your token in the text input below.\r\n\r\nExample: \"Bearer 12345abcdef\"",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer"
                });
                x.AddSecurityRequirement(new OpenApiSecurityRequirement()
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            },
                            Scheme = "oauth2",
                            Name = "Bearer",
                            In = ParameterLocation.Header,
                        },
                        new List<string>()
                    }
                });
            });
        }
    }
}
