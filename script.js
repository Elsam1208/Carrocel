document.addEventListener('DOMContentLoaded', () => { 
    // Aguarda o carregamento completo do DOM antes de executar o código
    const images = document.querySelector('.carousel-images'); 
    // Seleciona o contêiner das imagens do carrossel
    const prevButton = document.querySelector('.prev'); 
    // Seleciona o botão "anterior" do carrossel
    const nextButton = document.querySelector('.next'); 
    // Seleciona o botão "próximo" do carrossel
    
    let index = 0; 
    // Inicializa o índice da imagem atual como 0 (a primeira imagem)
    const totalImages = document.querySelectorAll('.carousel-images img').length; 
    // Conta o número total de imagens no carrossel

    function updateCarousel() { 
        // Função para atualizar a posição do carrossel
        const offset = -index * 100; 
        // Calcula o deslocamento necessário para a imagem atual (multiplica o índice por -100%)
        images.style.transform = `translateX(${offset}%)`; 
        // Aplica o deslocamento ao contêiner de imagens usando a transformação CSS
    }

    prevButton.addEventListener('click', () => { 
        // Adiciona um evento de clique ao botão "anterior"
        index = (index <= 0) ? totalImages - 1 : index - 1; 
        // Se o índice for 0 ou menor, volta à última imagem; caso contrário, decrementa o índice
        updateCarousel(); 
        // Atualiza a posição do carrossel para a imagem anterior
    });

    nextButton.addEventListener('click', () => { 
        // Adiciona um evento de clique ao botão "próximo"
        index = (index >= totalImages - 1) ? 0 : index + 1; 
        // Se o índice for o último, volta à primeira imagem; caso contrário, incrementa o índice
        updateCarousel(); 
        // Atualiza a posição do carrossel para a próxima imagem
    });

    // Opcionalmente, você pode configurar uma apresentação de slides automática
    setInterval(() => { 
        // Define um intervalo para executar o código repetidamente
        index = (index >= totalImages - 1) ? 0 : index + 1; 
        // Se o índice for o último, volta à primeira imagem; caso contrário, incrementa o índice
        updateCarousel(); 
        // Atualiza a posição do carrossel automaticamente
    }, 3000); 
    // Muda a imagem a cada 3 segundos (3000 milissegundos)
});
