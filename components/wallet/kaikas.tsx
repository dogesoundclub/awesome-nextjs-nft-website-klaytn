export async function kaikasConnect(isMobile:boolean) {
    if(window.klaytn){
        try {
            const klaytn = await window.klaytn.enable();
            if(window.klaytn.networkVersion !== 8217) {
                alert("Please change Kaikas network to Cypress");
            } else {
                sessionStorage.setItem("klaytn_kaikas_address", klaytn[0]);
                location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    } else {      
        if(isMobile) { 
            //구글 플레이 스토어 링크
        } else {
            alert("Please install Kaikas wallet"); window.open("https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi");
        }
    }
}