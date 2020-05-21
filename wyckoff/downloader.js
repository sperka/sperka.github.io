$(document).ready(function () {
  $("#download-btn").click(() => {
    const url = $("#wcl-url").val();

    // $.ajax({
    //   url: url,
    //   type: "GET",
    //   beforeSend: function (xhr) {
    //     xhr.setRequestHeader("Origin", "stockcharts.com");
    //   },
    //   success: function () {
    //     alert("Success!");
    //   },
    // });

    $.get(url, (data) => {
      const html = $(data);

      const options = $(html).find(".chartbook-select").find("option");
      options.each((i, option) => {
        let val = $(option).text();
        val = val.trim();
        const parts = val.split("-");
        const ticker = parts[0].trim();
        const description = parts[1].trim();
        tickers.push(ticker);
      });
    });
  });
});
