class SousavinhaFooter extends HTMLElement {
  connectedCallback() {
    this.render();
    feather.replace();
  }

  render() {
    const currentYear = new Date().getFullYear();

    this.innerHTML = `
            <style>
                footer { display: block; background: linear-gradient(135deg, #1a1a1a, #000000); color: #f7f7f7; font-family: 'Roboto', sans-serif; border-top: 1px solid rgba(255, 255, 255, 0.1); }
                .container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }
                .logo {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: white;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 1.5rem;
                    transition: all 0.3s ease;
                }
                .logo:hover { transform: translateY(-2px); }
                .logo span {
                    color: #009dfe;
                    position: relative;
                }
                .logo span::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: #009dfe;
                    transform: scaleX(0);
                    transform-origin: right;
                    transition: transform 0.3s ease;
                }
                .logo:hover span::after {
                    transform: scaleX(1);
                    transform-origin: left;
                }
                .footer-description {
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 1.7;
                    margin-bottom: 2rem;
                    font-size: 1.05rem;
                    max-width: 350px;
                }
                .footer-heading {
                    color: white;
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 1.75rem;
                    position: relative;
                    padding-bottom: 0.75rem;
                }
                .footer-heading::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 50px;
                    height: 3px;
                    background: #009dfe;
                    border-radius: 3px;
                }
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .footer-link {
                    color: rgba(255, 255, 255, 0.7);
                    text-decoration: none;
                    transition: all 0.3s ease;
                    position: relative;
                    padding-left: 1.5rem;
                    font-size: 1.05rem;
                }
                .footer-link::before {
                    content: '→';
                    position: absolute;
                    left: 0;
                    color: #009dfe;
                    opacity: 0;
                    transition: all 0.3s ease;
                }
                .footer-link:hover {
                    color: white;
                    padding-left: 2rem;
                }
                .footer-link:hover::before {
                    opacity: 1;
                    left: 0.5rem;
                }
                .social-links {
                    display: flex;
                    gap: 1.25rem;
                    margin-top: 2rem;
                }
                .social-link {
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .social-link:hover {
                    background: #009dfe;
                    transform: translateY(-5px) scale(1.1);
                }
                .contact-info {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                }
                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    color: rgba(255, 255, 255, 0.7);
                }
                .contact-item i { color: #009dfe; }
                .bottom-bar {
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 2rem 0;
                    text-align: center;
                    color: rgba(255, 255, 255, 0.6);
                }
                .footer-main-content {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    padding: 4rem 0;
                }
                @media (min-width: 768px) {
                    .footer-main-content {
                        grid-template-columns: auto 1fr;
                    }
                    .footer-right-content {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 3rem;
                    }
                }
            </style>

            <footer>
                <div class="container">
                    <div class="footer-main-content">
                        <div>
                            <a href="/" class="logo">
                                <div class="max-w-3xl">
                                <!-- Logo -->
                                <img
                                    src="./img/logo-footer.png"
                                    alt="Sousa Vinha Climatização"
                                    class="mb-6 w-32 sm:w-40 md:w-48 lg:w-56"
                                />
                                </div>
                            </a>

                            <p class="footer-description">
                                Especialista em manutenção, higienização, projeto e instalação de ar-condicionado.
                            </p>

                            <div class="social-links">
                            <a href="https://wa.me/551123687084?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20climatiza%C3%A7%C3%A3o." class="social-link"><i data-feather="message-circle"></i></a>
                            <a href="https://www.instagram.com/sousavinha_climatizacao" class="social-link"><i data-feather="instagram"></i></a>
                            <a href="https://www.youtube.com/@sousavinhaclimatizacao" class="social-link"><i data-feather="youtube"></i></a>
                                <a href="https://www.facebook.com/share/17wBTQpZmZ/" class="social-link"><i data-feather="facebook"></i></a>
                            </div>
                        </div>

                        <div class="footer-right-content">
                            <div>
                                <h3 class="footer-heading">Serviços</h3>
                                <div class="footer-links">
                                    <a class="footer-link">Manutenção</a>
                                    <a class="footer-link">Instalação</a>
                                    <a class="footer-link">Higienização</a>
                                </div>
                            </div>

                            <div>
                                <h3 class="footer-heading">Contato</h3>
                                <div class="contact-info">
                                    <div class="contact-item"><i data-feather="phone"></i> (11) 2368-7084</div>
                                    <div class="contact-item"><i data-feather="mail"></i> sousavinhaclimatizacao@gmail.com</div>
                                </div>
                            </div>

                            <div>
                                <h3 class="footer-heading">Atendimento</h3>
                                <div class="contact-info">
                                    <div class="contact-item"><i data-feather="clock"></i> Seg-Dom 8h-20h</div>
                                    <div class="contact-item"><i data-feather="map-pin"></i> Capital e Região Metropolitana de São Paulo</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bottom-bar">
                        © ${currentYear} Sousa Vinha Climatização
                    </div>
                </div>
            </footer>
        `;
  }
}

customElements.define("sousavinha-footer", SousavinhaFooter);
