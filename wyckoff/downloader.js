$(document).ready(() => {
  console.log(
    "hello there, being curious? in case you want to contact me --> github"
  );
  $("#download-btn").click(() => {
    const wclUrl = $("#wcl-url").val();

    const url = `https://cors-anywhere.herokuapp.com/${wclUrl}`;

    $.ajax({
      url: url,
      type: "GET",
      // beforeSend: function (xhr) {
      //   xhr.setRequestHeader("Origin", "stockcharts.com");
      // },
      success: (data) => {
        const html = $(data);

        const tickers = [];
        const options = $(html).find(".chartbook-select").find("option");
        options.each((i, option) => {
          let val = $(option).text();
          val = val.trim();
          const parts = val.split("-");
          const ticker = parts[0].trim();
          const description = parts[1].trim();
          tickers.push(ticker);
        });

        pushFile(tickers.join(","));
      },

      error: (err) => {
        console.log(err);
      },
    });
  });
});

const pushFile = (data) => {
  //creating an invisible element
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8, " + encodeURIComponent(data)
  );
  element.setAttribute("download", "wyckoff-communal-list-tickers.txt");
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
