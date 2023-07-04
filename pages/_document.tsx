import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            var iwapp = document.createElement("whatsApp-root");
            document.getElementsByTagName("body")[0].appendChild(iwapp);
            window.Clientify_WhatsappBID = "124596";
            window.Clientify_WhatsappUID = "31764";
          `,
          }}
        /> */}

        <Main />
        <NextScript />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.Clientify_WhatsappBID = "124596";
              window.Clientify_WhatsappUID = "31764";

              document.addEventListener("DOMContentLoaded", function() {
                var iwapp = document.createElement("whatsApp-root");
                document.getElementsByTagName("body")[0].appendChild(iwapp);
              
                var script = document.createElement("script");
                script.src = "https://api.clientify.net/static/js/whatsapp-widget/embed-whatsapp/embed.js";
              
                iwapp.appendChild(script);
              });`,
          }}
        />
        {/* <script
          defer
          type="text/javascript"
          src="https://api.clientify.net/static/js/whatsapp-widget/embed-whatsapp/embed.js"
        ></script> */}
      </body>
    </Html>
  );
}
