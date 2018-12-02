using Microsoft.AspNetCore.Mvc;

namespace ConfigureTypeScript.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        [HttpPost]
        public IActionResult GetMessage()
        {
            return Json(new { Title = "Hello from the Server!" });
        }
    }
}
