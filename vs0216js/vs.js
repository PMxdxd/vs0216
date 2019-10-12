document.getElementById('vsButton').addEventListener('click', function () {

    let yourName = document.getElementById('yourName').value;
    if (yourName === "") {
        yourName = "you";
    }

    let youWarPower = warPower();
    let tengaWarPower = warPower();

    let you = document.getElementById('you');
    let tenga = document.getElementById('tenga');

    let winOrLoss = document.getElementById('winOrLoss');

    let winner;

    if (youWarPower === tengaWarPower) {
    } else if (youWarPower > tengaWarPower) {
        winOrLoss.textContent = `${yourName} Win!!`;
        winner = yourName;
    } else {
        winOrLoss.textContent = `${yourName} Lose...`;
        winner = "tenga"
    }

    you.textContent = `${yourName}-${youWarPower}`;
    tenga.textContent = `tenga-${tengaWarPower}`;

    let tweet = `${yourName}-${youWarPower} VS tenga-${tengaWarPower}
勝者 ${winner}!!`;

    setTweetButton(tweet);


}, false);

function setTweetButton(text) {
    $('#tweet-area').empty();
    twttr.widgets.createShareButton(
        "https://pmxdxd.github.io/vs0216/vs",
        document.getElementById("tweet-area"),
        {
            size: "large",
            text: text,
            hashtags: "vsTenga",
        }
    );
}

const warPower = x => { return Math.floor(Math.random() * 10000); };