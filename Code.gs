function doGet() {
  var source = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = source.getSheetByName('sheet_name_here');
  var data = sheet.getRange('sheet_range_here').getValues()
  return response().json({
         "data": data 
      });
}

function response() {
   return {
      json: function(data) {
         return ContentService
            .createTextOutput(JSON.stringify(data))
            .setMimeType(ContentService.MimeType.JSON);
      }
   }
}
