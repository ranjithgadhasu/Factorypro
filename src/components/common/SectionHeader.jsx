const SectionHeader = ({
  subtitle,
  title,
  description,
  center = false,
}) => {
  return (
    <div
      className={`mb-12 ${
        center ? "text-center" : ""
      }`}
    >
      <span className="text-orange-500 uppercase text-sm font-semibold tracking-wider">
        {subtitle}
      </span>

      <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-gray-500 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;