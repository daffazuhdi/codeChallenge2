import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    // <center>
    <div className="bg-[#1C1B1B]">
      <div className="md:flex gap-5 py-[50px] px-[auto] max-w-screen-xl m-auto place-items-center">
        <div className="">
          <img
            src="https://clicktobuy.hyundai.com/assets/images/home-footer-hyudai-logo.png"
            alt=""
            className="mb-3 md:mb-0"
          />
        </div>
        <div className="">
          <div className="md:flex text-[#8c948c] gap-5">
            <p>Worldwide</p>
            <p>Hubungi Kami</p>
            <p>Legal</p>
            <p>Syarat & Ketentuan</p>
            <p>Kebijakan Publik</p>
            <p>Ketentuan Pemesanan</p>
            <p>Peta Situs</p>
          </div>
          <div className="text-[#5e5e5f] mt-3 sm:text-left">
            <p>
              © Hak Cipta 2020 Hyundai Motor Company. Seluruh hak dilindungi
              undang-undang.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
