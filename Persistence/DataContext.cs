﻿using Domain;
using Domain.App;
using Domain.AppTrainer;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        // Entidades a serem geradas pelo Entity Framework
        public DbSet<Grupo> Grupos { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Tome> Tomes { get; set; }
        public DbSet<Etude> Etudes { get; set; }
    }
}
