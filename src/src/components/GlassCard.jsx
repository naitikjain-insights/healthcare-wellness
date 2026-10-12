function GlassCard({
icon,
title,
description,
children,
className = '',
}) {
return (
<article className={`glass-card ${className}`}>
{icon && <span className="card-icon">{icon}</span>}

```
  {title && <h3>{title}</h3>}

  {description && <p>{description}</p>}

  {children}
</article>
```

)
}

export default GlassCard
