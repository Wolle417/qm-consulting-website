const LevelBadge = ({ level }) => {
  const dots = ['●○○', '●●○', '●●●'][level - 1] || '●○○';
  const labels = ['Einsteiger', 'Fortgeschritten', 'Experte'];
  
  return (
    <span className="text-xs text-gray-500">
      {dots} {labels[level - 1]}
    </span>
  );
};

export default LevelBadge;
