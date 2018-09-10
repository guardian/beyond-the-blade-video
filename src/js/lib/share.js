const twitterBaseUrl = 'https://twitter.com/intent/tweet?text=';
const facebookBaseUrl = 'https://www.facebook.com/dialog/share?app_id=180444840287&href=';
const googleBaseUrl = 'https://plus.google.com/share?url=';

export default function share(title, shareURL) {
    return function (network, extra='') {
        var twitterMessage = `${extra}${title}`;
        var shareWindow;
        var el = document.querySelector('body');
        var film = el.getAttribute('data-this-film');



        if (network === 'twitter') {
            if (film === 'father') {
                shareWindow = twitterBaseUrl + encodeURIComponent(twitterMessage + " #BeyondtheBlade 'Wrong place, wrong time – that's it' gu.com/blade-father ");
            }
            if (film === 'mother') {
                shareWindow = twitterBaseUrl + encodeURIComponent(twitterMessage + " #BeyondtheBlade 'When they found him guilty, the found me guilty too' gu.com/blade-mother ");
            }
            if (film === 'boy') {
                shareWindow = twitterBaseUrl + encodeURIComponent(twitterMessage + " #BeyondtheBlade 'I didn’t mean for him to die' gu.com/blade-boy ");
            }
            if (film === 'doctor') {
                shareWindow = twitterBaseUrl + encodeURIComponent(twitterMessage + " #BeyondtheBlade 'You can’t just keep patching them up and sending them back out there without any support' gu.com/blade-doctor ");
            }

        } else if (network === 'facebook') {
            shareWindow = facebookBaseUrl + shareURL;
        } else if (network === 'email') {
            shareWindow = 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + shareURL;
        } else if (network === 'google') {
            shareWindow = googleBaseUrl + shareURL;
        }

        window.open(shareWindow, network + 'share', 'width=640,height=320');
    };
}
