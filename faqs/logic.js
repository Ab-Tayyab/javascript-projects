document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.querySelector(".faq-question").addEventListener("click", () => {
            const answer = item.querySelector(".faq-answer");

            if (item.classList.contains("active")) {
                item.classList.remove("active");
                answer.style.maxHeight = null;
            } else {
                faqItems.forEach(i => {
                    i.classList.remove("active");
                    i.querySelector(".faq-answer").style.maxHeight = null;
                });
                item.classList.add("active");
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});
