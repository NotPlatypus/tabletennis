$(document).ready(function () {

    
    //search bar
    $("#polje-pretrage").on("input", function () {

        
        var tekst = $(this).val().toLowerCase();

        var vidljivihKartica = 0;

        
        $(".kartica").each(function () {
            var nazivKartice = $(this).find("h3").text().toLowerCase();

            if (nazivKartice.indexOf(tekst) !== -1) {
                $(this).show();
                vidljivihKartica++;
            } else {
                $(this).hide();
            }
        });

        if (vidljivihKartica === 0) {
            $("#poruka-nema-rezultata").show();
        } else {
            $("#poruka-nema-rezultata").hide();
        }
    });



    //kategorije sto loptica i reket
    $(".filter-dugme").on("click", function () {

        
        $(".filter-dugme").removeClass("aktivno");
        $(this).addClass("aktivno");

        
        var izabrana = $(this).data("kategorija");

        
        $("#polje-pretrage").val("");
        $("#poruka-nema-rezultata").hide();

        if (izabrana === "sve") {
            
            $(".kartica").show();
        } else {
            
            $(".kartica").each(function () {
                var kategorijaKartice = $(this).data("kategorija");

                if (kategorijaKartice === izabrana) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    });


    //animacija za klik na kartice
    $(".kartica").on("click", function () {

        
        var naziv = $(this).data("naziv");
        var opis = $(this).data("opis");

        $("#modal-naziv").text(naziv);
        $("#modal-opis").text(opis);

        
        $("#modal-overlay").addClass("aktivan");
    });

    
    $("#modal-zatvori").on("click", function () {
        $("#modal-overlay").removeClass("aktivan");
    });

    
    $("#modal-overlay").on("click", function (dogadjaj) {
        if ($(dogadjaj.target).is("#modal-overlay")) {
            $("#modal-overlay").removeClass("aktivan");
        }
    });


    //pitanja odgovor animacija

    $(".accordion-pitanje").on("click", function () {

        var odgovor = $(this).next(".accordion-odgovor");

        var vecOtvoren = odgovor.is(":visible");

        $(".accordion-odgovor").slideUp();
        $(".accordion-pitanje").removeClass("otvoren");

        
        if (!vecOtvoren) {
            odgovor.slideDown();
            $(this).addClass("otvoren");
        }
    });


    //dodavanje svojih predloga

    $("#forma-predloga").on("submit", function (dogadjaj) {

        
        dogadjaj.preventDefault();

        
        var ime = $("#ime-korisnika").val().trim();
        var naziv = $("#naziv-opreme").val().trim();
        var kategorija = $("#kategorija-opreme").val();
        var komentar = $("#komentar").val().trim();

        
        $("#poruka-greske").hide();
        $("#poruka-uspeha").hide();

        
        if (ime === "") {
            $("#poruka-greske").text("Molim te unesi svoje ime.").show();
            return;
        }

        if (naziv === "") {
            $("#poruka-greske").text("Molim te unesi naziv opreme.").show();
            return;
        }

        if (kategorija === "") {
            $("#poruka-greske").text("Molim te izaberi kategoriju.").show();
            return;
        }

        if (komentar === "") {
            $("#poruka-greske").text("Molim te unesi komentar.").show();
            return;
        }

        
        $("#poruka-uspeha").show();

        
        $("#ime-korisnika").val("");
        $("#naziv-opreme").val("");
        $("#kategorija-opreme").val("");
        $("#komentar").val("");
    });


    //tamna tema
    $("#dugme-dark-mode").on("click", function () {

        
        if ($("body").hasClass("tamna-tema")) {
            $("body").removeClass("tamna-tema");
            $(this).text("Tamna tema");
        } else {
            $("body").addClass("tamna-tema");
            $(this).text("Svetla tema");
        }
    });

});
