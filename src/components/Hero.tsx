import "./hero.css"

export default function Hero(){
    return (
        <>
            <section className="hero">
                <h1>Olá, eu sou Gabriel <br /> Desenvolvedor Full-stack</h1>

                <p className="description">Sou desenvolvedor full‑stack especializado em React/TypeScript no frontend e Node.js no backend. Entrego interfaces responsivas e acessíveis, APIs escaláveis, integração com bancos de dados e pipelines CI/CD.</p>

                <a className="download" href="/resume.pdf" download aria-label="Baixar resumo">
                    <button>Download resumo</button>
                </a>
            </section>
        </>
    )
}