using System.Collections.Generic;
using Domain.AppTrainer;

namespace Application.AppTrainer.Repertoires
{
    public class UserRepertoire
    {
        public string Username { get; set; }
        public int Total { get; set; }
        public int Time { get; set; }
        public ICollection<Repertoire> Repertoires { get; set; }

    }
}