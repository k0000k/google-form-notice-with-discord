 function postToDiscord(currentMessage, formUrl, sheetName) {
   // 아랫줄에 webHookUrl 변수에 Discord WebHook URL을 적고 주석을 해제해주세요.
  //const webHookUrl = "";

  const message = {

      content: currentMessage + "님이 " + sheetName + "를 작성하셨습니다. \n" + formUrl
    
  }
  
  const options = {
    'method': 'post',
    'payload': message
  }

  const req = UrlFetchApp.fetch(webHookUrl, options)
 }

function postFromSpreadsheet() {

  // 아랫줄에 messageColumn 변수에 메시지에 포함시킬 데이터가 있는 컬럼의 번호를 쓰고 주석을 해제해주세요.
  //const messageColumn = 2
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheets()[0];
  const sheetName = ss.getName()

  const url = ss.getUrl();

  const messageCall = sheet.getRange(sheet.getMaxRows(), messageColumn).getNextDataCell(SpreadsheetApp.Direction.UP)

  const currentMessage = messageCall.getValue()

  if (currentMessage == "") return

  let columnOffsets = sheet.getLastColumn() - messageColumn

  if (messageCall.offset(0, columnOffsets).getValue() != "") {
    columnOffsets += 1
  }

   if (messageCall.offset(0, columnOffsets).getValue() != "posted") {
     postToDiscord(currentMessage, url, sheetName)
   }
  
   messageCall.offset(0, columnOffsets).setValue("posted")
 }
