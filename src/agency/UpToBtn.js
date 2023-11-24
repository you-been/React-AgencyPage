const UptoBtn = ({ agencyStyle }) => {
  const onTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <a href="#" className={agencyStyle.upToBtn} onClick={onTop}>
        위로<span></span>
      </a>
    </>
  );
};
export default UptoBtn;
