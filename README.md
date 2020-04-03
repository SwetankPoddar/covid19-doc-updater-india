![React Logo](https://github.com/zeit/now/blob/master/packages/frameworks/logos/react.svg)

This project aims to make people aware about documents being released by the Indian goverment.


A majority of these documents contain very useful and important information, such as "how to make a mask using a cloth at home?". However, there's no "notification" system integrated in the goverment's website. So people have to keep on checking the website to receive information about that.

Todo:
- [x] Create template in React
- [x] Develop a serverless api endpoint to extract information from MoHFW (India)
- [x] Develop a parser to parse the infromation extracted from the endpoint
- [x] Create component to display these information
- [ ] Integrate a "subscribing" interface
- [ ] Send the list of new docs everyday as a "newsletter" 

### How to develop locally
This website runs on Zeit's  [Serverless Functions](https://zeit.co/docs/v2/serverless-functions/introduction). The functions are written in Node.js and can be found inside "api" folder.

To deploy this locally, install Zeit's [Now CLI](https://zeit.co/download). After which, clone this repository and type "now" in your terminal. Follow the instructions mentioned by NOW CLI. Once it gets over, type "now dev" to start a local development server.
