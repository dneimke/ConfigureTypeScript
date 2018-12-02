using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Text;

namespace AspNetCoreScriptTagHelperOverride
{
    [HtmlTargetElement("page-load")]
    public class PageLoadTagHelper : TagHelper
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