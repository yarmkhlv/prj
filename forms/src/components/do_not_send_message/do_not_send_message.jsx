import './do_not_send_message.css';

function CheckMessage({ doNotSendMessage, setDoNotSendMessage }) {
  const handlerChanger = () => {
    setDoNotSendMessage((prevState) => !prevState);
  };

  return (
    <div className="mini-block">
      <input
        id="sms"
        name="sms"
        type="checkbox"
        value={doNotSendMessage}
        onInput={handlerChanger}
      />
      <label className="mini-block__label this-label-inline" htmlFor="sms">
        Не отправлять СМС
      </label>
    </div>
  );
}

export { CheckMessage };
