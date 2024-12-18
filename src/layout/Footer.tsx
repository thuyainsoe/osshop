const Footer = () => {
  return (
    <div className="main-container bg-white w-full grid sm:grid-cols-2 gap-5 md:gap-0 md:grid-cols-4 py-10 mb-[40px] sm:mb-0">
      {/* first */}
      <div className="w-full flex flex-col items-start gap-y-3">
        <img
          className="max-w-[120px] sm:max-w-[147px] aspect-[147_/_45] object-cover"
          src="/logo.png"
          alt=""
        />
        <div className="text-description text-sm">
          Welcome to OS Shop, your one-stop destination for high-quality
          products at unbeatable prices.
        </div>
      </div>
      {/* second  */}
      <div className="w-full flex md:justify-center">
        <div className="flex flex-col gap-y-3">
          <h6 className="font-medium text-base text-heading">About OsShoppy</h6>
          <ul className="flex flex-col items-start text-sm text-description gap-y-1">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      {/* third  */}
      <div className="w-full flex md:justify-center">
        <div className="flex flex-col gap-y-3">
          <h6 className="font-medium text-base text-heading">Follow Us</h6>
          <ul className="flex flex-col items-start text-sm text-description gap-y-2">
            <li className="flex items-center gap-1">
              <img
                className="w-7 h-7 object-cover"
                src="https://s3-alpha-sig.figma.com/img/7570/029d/c818f34ea89f466e1687ef129fbc2fe8?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pHlmqaKEmAlocQhZbZ6mxh7X3shjWoIK56SV3FRl8yjVnd04L6hrgimltskAZUs4-KSyk34SeaaiuhOD4EVtSDQ3Pc5ZqF13H5p9~hCVCZ2pm2aHpa6-UUaslBezHcCW0rqhf4QIyaFNh2kPIQ3Oxn9bMzqK6FNuxWaZzZePHdUhES0OTx5-UGMiJhi5mk5YxPLizLZ9lbHNbMscxVPb6HYXQftG6zEZ6BcUUJpIy3b~AN7IwEdRx1hGdo4SokOy4VtbhTfLQ7Rh8UeWGFt4ziZyG5yT1avfmhcljTmSyPEDVpXjWyOtDVlHvbGA0ScwT7301lFsuhCWpMdxSCJ0vQ__"
                alt=""
              />
              Facebook
            </li>
            <li className="flex items-center gap-1">
              <img
                className="w-7 h-7 object-cover"
                src="https://s3-alpha-sig.figma.com/img/2ae0/4a03/0416daa09f8de12c6f578a90c53af030?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zi4sheBjZChIkPqcIHJGp3ApzPMJAeTJq4lWbWPpXmXijGKyZ6fbz-EZDFetw5WtcY7xolwjZ0BWYp53-qHBH4xoC4xRZayQaWT5548oqHacfdumA5DljPDOg1ugCnSbZMiXvfrA5~1uxUp321BF3UzUM2xs-cn2LVSUF2hCXYCcPxCB8oxLosyQZA~Gs~CTCmEFMfEMvNa~D8OGLCGpW2PKMY4WPTWuzPHHgawKC40cpI4fnFZsvibjNSSeIAoUg1LZBjAm960xiligliLcRlPfBhSbX9~Qyf1eMJ-YGz3lOqgf0zoGsV9R88mEh4hDHq5WoJBKK4nVVL-YHW-jog__"
                alt=""
              />
              Instagram
            </li>
          </ul>
        </div>
      </div>
      {/* fourth */}
      <div className="w-full flex md:justify-center">
        <div className="flex flex-col gap-y-3">
          <h6 className="font-medium text-base text-heading">
            OsShoppy app download
          </h6>
          <div className="w-full grid grid-cols-2 items-center">
            <div>
              <img className="w-[90px] aspect-square" src="/qr.png" alt="" />
            </div>
            <ul className="flex flex-col items-start text-sm text-description gap-y-2">
              <li className="flex items-center gap-1">
                <img
                  className="w-7 h-7 object-cover"
                  src="https://s3-alpha-sig.figma.com/img/5ea3/b298/d8b9830ba1869c5da3995aaebaf646e0?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CrInavkyzb-MXdFi7PFEbDl4iAfY1vrdfJEFyKFyEq5k-dTwpE~hCMe0ftf8NXKbmKMEHvkOBmLBqnt0MoOWJ-uYim5fKjifLxmL~q81NvWxBZeNzAReVbIgVEnfh2OPSyzy9c93sS45JRWvP0B6knb~paR9SJo-atn4cGE9m7dB6xFrIfBzM76fS5Hah4QsxV2~ng8oPs2mDtRMQ8u~fEzGRMsfCUXMev5ewrDxqgjzugsPqH4ZNknDa7p9l47tOPAFEAzKk1QKodeu90rl0GhqWxTrCAqRgRXwPys97GMyafcR1sQz9jFlUzXnA1kAhy2xQEJJSZHYf2Topk35wg__"
                  alt=""
                />
                App Store
              </li>
              <li className="flex items-center gap-1">
                <img
                  className="w-6 h-6 object-cover"
                  src="https://s3-alpha-sig.figma.com/img/4086/be48/1c6de1486380b5265a3a9598d309cd29?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E~ifu4aTqW6Q~~ZZh7Y-JenclHRR1QWMhC4Y8MQgJ5e0vD-jgdM6UEJE5BTEbBWmrvWAQ18a54Vl-R6m~ogM43bdr86nRe41rnY9y3zQ8BiaZF8S7OWdPkIMQBZqNhgu0Mnl42EbRxGM5s3x5uC5qbXUfMtAVdabPjgwhM6YYk3-8AxWyusppinQw-1KBMCt-rOayM9GEue9frnnCHh5f~MgP-~NH89bAW3aumHHXXD9nu3lp2zOjIiuyXJaArh3bTbl8wCkO4Zy2wHlPcm0lXxDk2ytP2k7vpJjDTTFTJ4DzoBdPjrNP04sNxLsIop42DhsTqVd23Gscyhogjwpcg__"
                  alt=""
                />
                Google Play
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
