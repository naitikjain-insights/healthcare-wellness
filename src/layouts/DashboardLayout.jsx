function DashboardLayout({ title, description, children }) {
return ( <section className="dashboard-page"> <div className="dashboard-page-header"> <p className="eyebrow">HEALTH & WELLNESS</p>

```
    <h1>{title}</h1>

    {description && (
      <p className="hero-description">{description}</p>
    )}
  </div>

  <div className="dashboard-page-content">
    {children}
  </div>
</section>
```

)
}

export default DashboardLayout
