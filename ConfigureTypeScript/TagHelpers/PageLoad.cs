using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Mvc.TagHelpers;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;
using Microsoft.Extensions.Caching.Memory;
using System.Text;
using System.Text.Encodings.Web;

namespace AspNetCoreScriptTagHelperOverride
{
    [HtmlTargetElement("page-load")]
    public class PageLoadScriptTagHelper : TagHelper
    {
        [HtmlAttributeName("pageName")]
        public string PageName { get; set; }

        
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            output.TagName = "script";    // Replaces <page-load> with <script> tag

            var sb = new StringBuilder();
            var scriptContent = $"var page = new sample.{PageName}();";

            sb.AppendLine("document.addEventListener('DOMContentLoaded', function () {");
            sb.AppendLine(scriptContent);
            sb.AppendLine("page.Init();");
            sb.AppendLine("}, false);");
            output.PostContent.AppendHtml(sb.ToString());
        }
    }
}