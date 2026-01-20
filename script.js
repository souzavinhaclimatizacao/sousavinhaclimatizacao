// Main JavaScript for CoolFlow Pro

// Service Modal Data
const serviceData = {
    1: {
        title: "Manutenção Preventiva",
        icon: '<i data-feather="check-circle" class="w-12 h-12 text-primary"></i>',
        content: `
            <p class="mb-4">A manutenção preventiva é essencial para garantir o funcionamento adequado do seu sistema de climatização, aumentar sua vida útil e reduzir custos energéticos.</p>
            
            <h4>Benefícios Principais:</h4>
            <ul class="mb-4">
                <li>Redução de até 30% no consumo de energia</li>
                <li>Aumento da vida útil do equipamento em até 40%</li>
                <li>Prevenção de falhas e quebras inesperadas</li>
                <li>Melhoria da qualidade do ar interno</li>
                <li>Manutenção da eficiência do sistema</li>
                <li>Plano mensal ou avulso</li>
            </ul>

            <h4>O que inclui nosso serviço:</h4>
            <ul>
                <li>Limpeza preventiva</li>
                <li>Aplicação de bactericída</li>
                <li>Inspeção de componentes elétricos</li>
                <li>Lubrificação de partes móveis</li>
                <li>Teste de funcionamento e segurança</li>
            </ul>

            <p class="mt-6"><strong>Frequência recomendada:</strong> A cada mês.</p>
        `
    },
    2: {
        title: "Manutenção Corretiva",
        icon: '<i data-feather="tool" class="w-12 h-12 text-primary"></i>',
        content: `
            <p class="mb-4">Quando ocorrem falhas no sistema de climatização, nossa equipe especializada está pronta para realizar reparos rápidos e eficientes, minimizando o tempo de inatividade.</p>
            
            <h4>Serviços Oferecidos:</h4>
            <ul class="mb-4">
                <li>Reparo de vazamentos de refrigerante</li>
                <li>Substituição de componentes elétricos</li>
                <li>Conserto de placas eletrônicas</li>
                <li>Reparo de motores e ventiladores</li>
                <li>Correção de problemas de drenagem</li>
                <li>Solução de falhas no sistema de controle</li>
            </ul>

            <h4>Nosso Diferencial:</h4>
            <ul>
                <li>Atendimento emergencial para clientes corporativos</li>
                <li>Peças originais com garantia do fabricante</li>
                <li>Técnicos especializados por marca e modelo</li>
                <li>Diagnóstico preciso com equipamentos modernos</li>
                <li>Transparência no orçamento e prazos</li>
            </ul>

           `
    },
    3: {
        title: "Higienização Profissional",
        icon: '<i data-feather="wind" class="w-12 h-12 text-primary"></i>',
        content: `
            <p class="mb-4">A higienização profissional é fundamental para garantir a qualidade do ar e a saúde dos ocupantes, especialmente em ambientes com alto fluxo de pessoas.</p>
            
            <h4>Processo de Higienização:</h4>
            <ul class="mb-4">
                <li>Desmontagem completa dos componentes</li>
                <li>Limpeza com produtos específicos e biodegradáveis</li>
                <li>Aplicação de desinfetantes hospitalares</li>
                <li>Remoção de fungos, bactérias e ácaros</li>
                <li>Limpeza de dutos e ventilação</li>
                <li>Aplicação de tratamento anti-odor</li>
            </ul>

            <h4>Benefícios da Higienização:</h4>
            <ul>
                <li>Redução de até 90% dos agentes alergênicos</li>
                <li>Eliminação de odores desagradáveis</li>
                <li>Prevenção da Síndrome do Edifício Doente</li>
                <li>Melhoria do conforto respiratório</li>
                <li>Redução de doenças respiratórias</li>
                <li>Economia de energia com sistema limpo</li>
            </ul>

            <p class="mt-6"><strong>Recomendação:</strong> Higienização completa a cada 12 meses para ambientes residenciais, a cada 6 meses para comerciais.</p>
        `
    },
    4: {
        title: "Projeto Técnico",
        icon: '<i data-feather="clipboard" class="w-12 h-12 text-primary"></i>',
        content: `
            <p class="mb-4">Um projeto técnico bem elaborado é a base para um sistema de climatização eficiente e econômico. Realizamos cálculos precisos para dimensionar corretamente seu sistema.</p>
            
            <h4>Etapas do Projeto:</h4>
            <ul class="mb-4">
                <li>Análise das características do ambiente</li>
                <li>Cálculo de carga térmica (BTU/h)</li>
                <li>Definição do tipo de sistema ideal</li>
                <li>Especificação técnica dos equipamentos</li>
                <li>Projeto de distribuição de ar</li>
                <li>Planejamento da instalação elétrica</li>
                <li>Estimativa de consumo energético</li>
            </ul>

            <h4>Vantagens do Projeto Técnico:</h4>
            <ul>
                <li>Economia de até 40% no consumo de energia</li>
                <li>Conforto térmico uniforme em todo ambiente</li>
                <li>Prevenção de super ou subdimensionamento</li>
                <li>Compatibilidade com normas técnicas</li>
                <li>Facilidade na manutenção futura</li>
                <li>Valorização do imóvel</li>
            </ul>

            <p class="mt-6"><strong>Entrega:</strong> Projeto completo com memorial descritivo, especificações técnicas e plantas detalhadas.</p>
        `
    },
    5: {
        title: "Instalação Especializada",
        icon: '<i data-feather="settings" class="w-12 h-12 text-primary"></i>',
        content: `
            <p class="mb-4">A instalação técnica especializada é crucial para o desempenho e durabilidade do sistema. Seguimos rigorosamente as normas dos fabricantes e boas práticas do setor.</p>
            
            <h4>Nossa Metodologia:</h4>
            <ul class="mb-4">
                <li>Preparação do local conforme projeto</li>
                <li>Instalação seguindo normas ABNT e fabricante</li>
                <li>Conectividade elétrica com proteção adequada</li>
                <li>Sistema de drenagem eficiente</li>
                <li>Vedação e isolamento térmico</li>
                <li>Teste de vácuo e carga de refrigerante</li>
                <li>Balanceamento do sistema de distribuição</li>
            </ul>

            <h4>Garantias da Instalação:</h4>
            <ul>
                <li>Garantia de 12 meses na mão de obra</li>
                <li>Respeito às garantias do fabricante</li>
                <li>Documentação completa da instalação</li>
                <li>Treinamento do usuário final</li>
                <li>Suporte técnico pós-instalação</li>
                <li>Certificado de conformidade técnica</li>
            </ul>

            <p class="mt-6"><strong>Tempo médio:</strong> 1-2 dias para sistemas split, 3-7 dias para sistemas centrais, dependendo da complexidade e agenda.</p>
        `
    }
};

// Modal Functions
function openServiceModal(serviceId) {
    const modal = document.getElementById('serviceModal');
    const service = serviceData[serviceId];
    
    if (service) {
        document.getElementById('modalTitle').textContent = service.title;
        document.getElementById('modalIcon').innerHTML = service.icon;
        document.getElementById('modalContent').innerHTML = service.content;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Re-initialize feather icons in modal
        feather.replace();
    }
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Contact Form Handler
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };
    
    // Format WhatsApp message
    const whatsappMessage = `*Nova Solicitação de Orçamento*\n\n` +
                           `*Nome:* ${formData.name}\n` +
                           `*Email:* ${formData.email}\n` +
                           `*Telefone:* ${formData.phone}\n` +
                           `*Serviço:* ${formData.service}\n` +
                           `*Mensagem:* ${formData.message}\n\n`
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/551123687084?text=${encodedMessage}`;
// Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    alert('Formulário enviado com sucesso! Você será redirecionado para o WhatsApp para finalizar a solicitação.');
    
    // Reset form
    this.reset();
});

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeServiceModal();
    }
});

// Close modal when clicking outside
document.getElementById('serviceModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeServiceModal();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add current year to footer if needed
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Initialize tooltips if any
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', function() {
            // Tooltip implementation can be added here
        });
    });
});