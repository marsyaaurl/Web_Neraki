export default function AlertMessage({ type = "success", message }) {
  const baseStyle =
    "px-4 py-3 border-2 rounded-lg font-medium text-sm transition-opacity duration-500 ";

  const styles = {
    success: `${baseStyle} border-blue text-blue`,
    error: `${baseStyle}  border-red text-red`,
  };

  return (
    <div className={styles[type]} role="alert" aria-live="polite">
      {message}
    </div>
  );
}
