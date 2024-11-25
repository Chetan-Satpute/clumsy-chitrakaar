import Instagram from '~/assets/svgs/instagram';
import Whatsapp from '~/assets/svgs/whatsapp';

function Footer() {
  return (
    <div className="bg-green-200 p-2 flex justify-around gap-2 flex-wrap">
      <span className="flex gap-2 items-center">
        <Instagram className="h-5 w-5" />
        <span className="text-xs underline font-semibold">
          clumsy_chitrakaar
        </span>
      </span>
      <span className="flex gap-2 items-center">
        <Whatsapp className="h-5 w-5" />
        <span className="text-xs underline font-semibold">7038512750</span>
      </span>
      <span className="flex gap-2 items-center">
        <md-icon class="font-light">mail</md-icon>
        <span className="text-xs underline font-semibold">
          pallavis5199@gmail.com
        </span>
      </span>
    </div>
  );
}

export default Footer;
