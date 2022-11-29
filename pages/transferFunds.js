import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { FaEthereum, FaUserAlt } from "react-icons/fa";
//INTERNAL IMPORT
import Style from "../styles/transferFund.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import images from "../img";
import { Button, Loader } from "../components/componentsindex";

//IMPORT FROM CONTACT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const transferFunds = () => {
  const { currentAccount, transferEther } = useContext(NFTMarketplaceContext);
  const [transferAmount, setTransferAmount] = useState("");
  const [transferAccount, setTransferAccount] = useState("");
  const [readMessage, setReadMessage] = useState("");
  const [openBox, setOpenBox] = useState(false);

  const transactionPrueba = [1, 2, 3, 5, 6, 454];
  return (
    <div className={formStyle.transfer}>
      <div className={formStyle.transfer_box}>
        <h1>transfer Ether</h1>
        <p>lore</p>
        <div className={formStyle.transfer_box_box}>
          <div className={formStyle.transfer_box_box_left}>
            <Image
              src={images.transfer}
              alt="images"
              width={400}
              height={400}
            />
          </div>
          <div className={formStyle.transfer_box_box_right}>
            <h2>Sie können ihre Coins transferieren </h2>
            <div className={formStyle.transfer_box_box_right_info}>
              <p className={formStyle.transfer_box_box_right_info_desktop}>
                Account
              </p>
              <p className={formStyle.transfer_box_box_right_info_mobile}>
                Account
              </p>
              <p>Bilanz: 111 ETH</p>
            </div>
            {/* TRANSFER FIELDS */}
            <div className={formStyle.transfer_box_box_right_box}>
              <div className={formStyle.Form_box_input}>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <FaUserAlt />
                  </div>
                  <input
                    type="text"
                    placeholder="Adresse*"
                    onChange={(e) => setTransferAccount(e.target.value)}
                  />
                </div>
              </div>
              <div className={formStyle.Form_box_input}>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <FaEthereum />
                  </div>
                  <input
                    type="number"
                    min={1}
                    placeholder="ETH"
                    onChange={(e) => setTransferAmount(e.target.value)}
                  />
                </div>
              </div>
              <div className={formStyle.Form_box_input}>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="something about yourself in few words"
                  onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              {loading ? (
                <Loader />
              ) : (
                <Button
                  btnName="Transfer Funds"
                  handleClick={() =>
                    transferEther(transferAccount, transferAmount, message)
                  }
                  classStyle={Style.button}
                />
              )}
            </div>
          </div>
        </div>
        //TRANSACTION HISTORY
        <h1 className={Style.transfer_box_h1}>Transaktionsverlauf</h1>
        <p>
          dflkajfsdlköjflkdasjflkdasjfalköadsjlköfgvdjsdfa
          dskfdsliköjfdsoikjfvoasidujfoidsajfvoisadjfoiadsj
        </p>
        <div className={Style.transfer_box_history}>
          {transactions.map((el, i) => (
            <div className={Style.transfer_box_history_item} key={i + 1}>
              <Image
                src={images.transferEther}
                width={100}
                height={100}
                alt="image"
              />
              <div className={Style.transfer_box_history_item_info}>
                <p>
                  <span>Transfer ID:</span> #1
                </p>
                <p>
                  <span>Amount:</span> #2
                </p>
                <p>
                  <span>From:</span> #3
                </p>
                <p>
                  <span>To:</span> #4
                </p>

                <Button
                  btnName="Message"
                  handleClick={
                    (() => setReadMessage("muy bonito pripito"),
                    setOpenBox(true))
                  }
                  classStyle={Style.readButton}
                />
              </div>
            </div>
          ))}
        </div>
        {openBox == false ? (
          ""
        ) : (
          <div className={Style.messageBox} onClick={() => setOpenBox(false)}>
              <div className={Style.messageBox_box}>
                <h1>Nachrichten des Transaktionen</h1>
                <p>Ihre Nachricht</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default transferFunds;
