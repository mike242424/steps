export default function Message({ children, step }) {
  return (
    <div className="message">
      <h3>Step {step}: </h3>
      {children}
    </div>
  );
}
