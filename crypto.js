{
    const addresses = {
        "btc": "36sZnpNdgVaR7b3UR8UPBy5WbosZfTybuA",
        "eth": "0xDdc655029Bc17338fE477526A9Dc8a6C747B4a81"
    }

    const currency = document.body.getAttribute("data-currency");
    const address = addresses[currency];

    document.getElementById("address").innerText = address;
    new QRCode(document.getElementById("qrcode"), address);
}
