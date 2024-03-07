function run(){
fetch("https://desertdiamondhvac.com/wp-admin/admin-ajax.php?action=totalpoll", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryKZBG04cmrcV1f1Af",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://desertdiamondhvac.com/vote-for-your-local-school/",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": "------WebKitFormBoundaryKZBG04cmrcV1f1Af\r\nContent-Disposition: form-data; name=\"totalpoll[choices][c29a7a7e-0c09-4f8f-8a6d-9cff732ae2bb][]\"\r\n\r\nd987d32c-d642-4d8b-82ab-cb8fc46f3415\r\n------WebKitFormBoundaryKZBG04cmrcV1f1Af\r\nContent-Disposition: form-data; name=\"totalpoll[screen]\"\r\n\r\nvote\r\n------WebKitFormBoundaryKZBG04cmrcV1f1Af\r\nContent-Disposition: form-data; name=\"totalpoll[pollId]\"\r\n\r\n12441\r\n------WebKitFormBoundaryKZBG04cmrcV1f1Af\r\nContent-Disposition: form-data; name=\"totalpoll[action]\"\r\n\r\nvote\r\n------WebKitFormBoundaryKZBG04cmrcV1f1Af--\r\n",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
}
setInterval(run, 100)
