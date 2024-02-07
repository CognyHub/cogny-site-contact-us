require('dotenv').config()
const express = require('express')
const app = express()

// const InfisicalClient = require("infisical-node");
// const client = new InfisicalClient({
//     token: "st.65b07832f8ff1c97feffe804.85a83f0cb8ce3479140e15b623dd9131.aecde03a3ea37b5cb71294931c44b7e8"
// });

// client.getAllSecrets({
//     environment: "dev",
//     path: "/",
//     attachToProcessEnv: false,
// })
// .then((secrets) => {
        
    const secureEnv = require('secure-env');
    global.env = secureEnv({secret:'mySecretPassword'}) || {};

    // console.log('process.env',  process.env)
    // console.log('global.env',   global.env)
    // console.log('secrets',   secrets)

    let vars = `<b>.env.enc CRIPTOGRAFADA</b>`;
    for (const [key, value] of Object.entries({ /*...process.env,*/ ...global.env, })) {
        vars += `<p>${key}: ${value}</p>`
    }

    vars += `____________________________________`;
    vars += `<br>`;
    vars += `<br>`;

    vars += `<b>.env LOCAL/INJETADA</b>`;
    for (const [key, value] of Object.entries({ ...process.env, /*...global.env,*/ })) {
    vars += `<p>${key}: ${value}</p>`
    }



    app.get('/', (req, res) => {
    res.send(`

    
    <div id="mc_embed_shell">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
  <style type="text/css">
        #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
    <form action="https://cognyhub.us21.list-manage.com/subscribe/post?u=ded50c5ac5f0a472c925dd58b&amp;id=6816eb4a0a&amp;f_id=0049f7e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
        <div id="mc_embed_signup_scroll"><h2>Inscreva no meu canal!</h2>
            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
            <div class="mc-field-group"><label for="mce-EMAIL">Endereço de e-mail <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div><div class="mc-field-group"><label for="mce-FNAME">Nome </label><input type="text" name="FNAME" class=" text" id="mce-FNAME" value=""></div><div class="mc-field-group"><label for="mce-LNAME">Sobrenome </label><input type="text" name="LNAME" class=" text" id="mce-LNAME" value=""></div>
<div hidden=""><input type="hidden" name="tags" value="2975397"></div>
        <div id="mce-responses" class="clear foot">
            <div class="response" id="mce-error-response" style="display: none;"></div>
            <div class="response" id="mce-success-response" style="display: none;"></div>
        </div>
    <div aria-hidden="true" style="position: absolute; left: -5000px;">
        /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
        <input type="text" name="b_ded50c5ac5f0a472c925dd58b_6816eb4a0a" tabindex="-1" value="">
    </div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
                <p style="margin: 0px auto;"><a href="http://eepurl.com/iIwQpg" title="Mailchimp - marketing por e-mail fácil e divertido"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
            </div>
        </div>
    </div>
</form>
</div>
<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';fnames[6]='MMERGE6';ftypes[6]='address';fnames[7]='MMERGE7';ftypes[7]='address';fnames[8]='MMERGE8';ftypes[8]='imageurl';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>





    `)
    })

    const port = parseInt(process.env.PORT ? process.env.PORT : 3000)
    // const port = 3000;

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })

// });
