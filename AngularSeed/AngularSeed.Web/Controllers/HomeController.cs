using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularSeed.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult App()
        {
            return View();
        }

        public ActionResult Dashboard()
        {
            ViewBag.Message = "ASP.Net MVC Razor syntax";

            return View();
        }
    }
}