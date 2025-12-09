const TipBox = ({ title = "Praxis-Tipp", children }) => (
  <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
    <div className="flex items-start">
      <span className="text-xl mr-3">💡</span>
      <div>
        <h4 className="font-semibold text-slate-800">{title}</h4>
        <p className="text-sm text-slate-700">{children}</p>
      </div>
    </div>
  </div>
);

export default TipBox;
