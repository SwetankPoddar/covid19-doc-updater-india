import { request } from 'urllib';
import { parse } from 'node-html-parser';

const website_url = "https://www.mohfw.gov.in/"

module.exports = (req, res) => {
  request(website_url, function (err, data) {
  if (err) {
    throw err; // you need to handle error
  }
  res.status(200).json(parse_html(data.toString()));
});

};


function parse_html(html_in_string){
  //console.log(parse(html_in_string).querySelectorAll(".update-box"))
  let update_boxes = parse(html_in_string).querySelectorAll(".update-box");
  let all_messages = []
  update_boxes.forEach(update => {
    let readable = update.querySelector("strong").text
    let date_parts = readable.split(".")
    all_messages.push({
      "date": {
          "timestamp": new Date(+date_parts[2], date_parts[1] - 1, +date_parts[0]).getTime(),
          "verbose": readable
      },
      "message": update.text.trim().split(/\d{1,2}\.\d{1,2}\.\d{4}/)[1].trim(),
      "urls": get_urls(update.querySelectorAll("a"))
    })
  });
  return all_messages;
}


function get_urls(urls_query_selector) {
  let urls = [];
  urls_query_selector.forEach(link => {
    urls.push(link.getAttribute("href"));
  })
  return urls;
}