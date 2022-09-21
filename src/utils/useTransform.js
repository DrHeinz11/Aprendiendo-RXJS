const useTransform = ([...textButton], signalButton) => {
  const upper = textButton[0].toUpperCase();
  const splice = textButton.slice(1);
  const signo = signalButton ? ["!"] : "";
  return [upper, ...splice, signo].join("");
};

export default useTransform;
