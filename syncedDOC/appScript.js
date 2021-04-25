
var scriptProp = PropertiesService.getScriptProperties()

function intialSetup () {
  var activeSpreadsheet = DocumentApp.getActiveDocument()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}
function doPost (e) {
  var lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    var doc = DocumentApp.openById(scriptProp.getProperty('key'))
    var body = doc.getBody()
    
    var  saved=body.getText()
    
    if(e.parameter["data"]=="get data"){
      return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'sugggccess', 'row':saved}))
      .setMimeType(ContentService.MimeType.JSON)
    }
    

    body.setText(e.parameter["data"])
    

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'sugggccess', 'row': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
