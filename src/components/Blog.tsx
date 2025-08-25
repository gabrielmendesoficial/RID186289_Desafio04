import "./blog.css"

export default function Blog() {
    return (
        <>
            <section id="blog" className="blog">
                <div className="wrapper">
                    <h2 className="title">Blog</h2>

                    <div className="cards">
                        <div className="card">
                            <h2 className="title">Como a Inteligência Artificial Está Transformando o Mercado de Trabalho</h2>

                            <div className="meta">
                                <p>Apr 14, 2025 </p>
                                <p>IA</p>
                            </div>

                            <p>A IA generativa, como o ChatGPT e o DALL·E, está revolucionando a criação de conteúdo. Essas ferramentas utilizam algoritmos avançados para gerar textos, imagens, músicas e vídeos a partir de comandos simples. Por exemplo, o Adobe Firefly permite que usuários criem imagens e vídeos personalizados de forma rápida e intuitiva, sem necessidade de habilidades técnicas avançadas .</p>

                            <a href="https://professional.dce.harvard.edu/blog/ai-will-shape-the-future-of-marketing/">Ver artigo completo</a>
                        </div>

                        <div className="card">
                            <h2 className="title">IA Generativa: Criando Conteúdos do Zero</h2>

                            <div className="meta">
                                <p>April 14, 2025</p>
                                <p>AI, Criação de conteúdo</p>
                            </div>

                            <p>Imagine a jornada do seu cliente como um caminho sinuoso, com momentos em que ele precisa da informação certa ou de um empurrãozinho na direção correta. Isso exige variedade e expertise em formatos de conteúdo, como memes para captar a atenção, artigos do setor para tratar das dores, e-mails personalizados para fechar o negócio, e por aí vai. Porém, o verdadeiro desafio é escalar o conteúdo garantindo impacto personalizado em cada ponto de contato com o cliente. Usar IA generativa para criação de conteúdo pode ajudar a superar esse desafio.</p>

                            <a href="https://hexaware.com/blogs/generative-ai-for-content-creation-the-future-of-content-ops/">Ver artigo completo</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}