
function doGet() {
    var template = HtmlService.createTemplateFromFile('pruebas');
    return template.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
  }
  
  function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
  }