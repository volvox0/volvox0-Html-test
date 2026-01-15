document.addEventListener('click', function(e) {
    for (let i = 0; i < 5; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark-effect';
        
        spark.style.left = e.pageX + 'px';
        spark.style.top = e.pageY + 'px';
        
        const moveX = (Math.random() - 0.5) * 200;
        const moveY = (Math.random() - 0.5) * 200;
        spark.style.setProperty('--moveX', `${moveX}px`);
        spark.style.setProperty('--moveY', `${moveY}px`);

        document.body.appendChild(spark);

        setTimeout(() => {
            spark.remove();
        }, 600);
    }
});
