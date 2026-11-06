/* Tango Grill Argentin: bilingual FR/EN, scroll reveals, rotating hero word,
   gentle hero parallax. French is the no-JS default render. */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var I18N = {
    fr: {
      doc_title: "Tango Grill Argentin · Territet, Montreux",
      brand_sub: "Grill Argentin · Territet",
      hero_rating: "4,8 sur Google, 116 avis",
      hero_cuisine: "Grill argentin",
      hero_l1: "La braise",
      hero_l2: "argentine",
      rotate_label: "Sur le feu ce soir :",
      hero_lede: "Viandes importées d’Argentine, cuites à la braise et servies avec chimichurri, Malbec au verre, dans une petite salle de Territet, entre Montreux et le château de Chillon.",
      cta_call: "Réserver par téléphone",
      cta_menu: "Découvrir la carte",
      hero_hours: "Mar à sam : midi et soir · Dim : midi",
      num_48: "4,8",
      trust_1: "sur Google, 116 avis",
      trust_2: "des restaurants de Territet sur TripAdvisor",
      trust_3n: "Argentine",
      trust_3: "l’origine des viandes, importées",
      trust_4: "couverts, une salle à taille humaine",
      chip_1: "La parrilla",
      chip_2: "En images",
      chip_3: "La carte",
      chip_4: "La cave",
      chip_5: "Le patron",
      chip_6: "Nous trouver",
      par_title: "Le feu, la viande, le geste.",
      par_p1: "Ici, tout passe par la braise. Les pièces arrivent d’Argentine, le patron les grille à la commande et les sert comme là-bas : sel grossier, chimichurri, pomme de terre au four.",
      par_p2: "La pièce maîtresse, c’est la parrillada : le grill mixte qui arrive en grésillant sur son plateau chauffé, à poser au milieu de la table et à partager.",
      stat_1: "le poids de votre pièce, au choix",
      stat_2n: "4 pièces",
      stat_2: "dans la parrillada : filet, entrecôte, faux-filet et veau",
      stat_3: "des viandes importées d’Argentine",
      par_tag: "Sur le feu, à la commande",
      gal_title: "Ce qui sort de la braise",
      gal_hint: "Faites glisser pour parcourir les plats.",
      dish_1: "Le grill mixte qui arrive en grésillant, à partager.",
      dish_2: "L’entrée la plus louée dans les avis, année après année.",
      dish_3: "Le nom argentin de l’entrecôte, servi avec chimichurri.",
      dish_4n: "La salle",
      dish_4: "20 à 30 couverts, aux couleurs de La Boca, le quartier de Buenos Aires.",
      dish_5: "Au verre ou à la bouteille, le rouge argentin de la braise.",
      menu_title: "L’ardoise de la braise",
      menu_intro: "Les plats ci-dessous sont ceux que les convives décrivent dans leurs avis et les guides. La carte complète se découvre sur place ou par téléphone.",
      cat_1: "Entrées",
      cat_2: "De la parrilla",
      cat_3: "Accompagnements",
      cat_4: "Desserts",
      cat_5: "Boissons",
      mi_emp: "Chaussons dorés à la viande de bœuf, l’ouverture classique.",
      mi_cho_n: "Chorizo grillé",
      mi_cho: "La saucisse argentine, grillée, en première assiette.",
      mi_pain_n: "Pain et ses deux sauces",
      mi_pain: "Le pain arrive à table accompagné de deux sauces.",
      grill_note: "Pièces de 200 à 500 g selon votre appétit, grillées à la commande.",
      mi_bife: "L’entrecôte argentine, servie avec chimichurri.",
      mi_lomo: "Le filet, la pièce la plus tendre de la carte.",
      mi_rum_n: "Cœur de rumsteck argentin",
      mi_rum: "Le faux-filet, pour les amateurs de goût franc.",
      mi_cote_n: "Côte de bœuf",
      mi_cote: "Servie avec le chimichurri, comme dans les avis des convives.",
      mi_chu: "Avec pomme de terre au four, légumes grillés et chimichurri.",
      mi_par: "Le grill mixte à partager : filet, entrecôte, faux-filet et veau, brochette de légumes grillés et pomme de terre au four, servi grésillant.",
      mi_poulet_n: "Poulet",
      mi_poulet: "L’option volaille de la carte, pour varier les plaisirs.",
      mi_pdt_n: "Pomme de terre au four",
      mi_pdt: "Servie avec sa sauce, l’accompagnement de la maison.",
      mi_leg_n: "Brochette de légumes grillés",
      mi_leg: "Les légumes passent aussi par la braise.",
      mi_frites_n: "Frites",
      mi_frites: "Pour accompagner les pièces grillées.",
      mi_chimi: "La sauce argentine aux herbes, compagne de toutes les viandes.",
      mi_des_n: "Desserts argentins classiques",
      mi_des: "Les classiques argentins, à découvrir sur place.",
      mi_glace_n: "Glaces",
      mi_glace: "Glaces et dessert glacé, pour finir en douceur.",
      mi_malbec: "Le rouge argentin, au verre ou à la bouteille.",
      mi_vins_n: "Vins rouges argentins",
      mi_vins: "Le cœur de la cave, plusieurs vins servis au verre.",
      mi_suisses_n: "Vins suisses",
      mi_suisses: "La carte garde aussi une place aux vins d’ici.",
      mi_quilmes: "La bière argentine, pour commencer en terrasse ou en salle.",
      menu_note: "Les prix ne figurent pas encore sur cette page : ils seront ajoutés dès que la maison les aura confirmés. En attendant, un appel suffit pour connaître la carte et réserver votre table.",
      cave_title: "Un bar tapissé de bouteilles argentines",
      cave_copy: "Les guides le remarquent depuis des années : derrière le bar, les bouteilles argentines font le mur. Malbec au verre, beaux rouges d’Argentine, et quelques vins suisses pour les curieux. Le patron conseille l’accord avec votre pièce.",
      cave_1: "Malbec au verre",
      cave_2: "Rouges d’Argentine",
      cave_3: "Vins suisses aussi",
      pat_title: "Un Argentin, sa braise, sa salle.",
      pat_p1: "Le patron est argentin. Il accueille, il sert, il conseille la pièce et la cuisson, et il raconte volontiers d’où vient la viande : d’Argentine, importée pour sa parrilla.",
      pat_p2: "Autour de lui, une petite équipe de famille, une vingtaine de couverts, de vieux tangos en fond sonore et des murs aux couleurs de La Boca. Les avis racontent la même scène depuis 2011, et c’est exactement pour cela qu’on y retourne.",
      pat_c1: "Patron argentin",
      pat_c2: "Viandes importées d’Argentine",
      pat_c3: "20 à 30 couverts",
      pat_c4: "Tangos argentins en fond sonore",
      pat_c5: "Réservation conseillée",
      pat_c6: "Cartes et paiements numériques acceptés",
      pat_rating: "116 avis sur Google, et N°1 des restaurants de Territet sur TripAdvisor (4,5).",
      pat_tag: "La salle, côté La Boca",
      vis_title: "Sur la route du château",
      vis_c1t: "Adresse et contact",
      vis_dir: "Itinéraire",
      vis_c2t: "Horaires",
      h_d1: "Mardi à samedi",
      h_d2: "Dimanche",
      h_d3: "Lundi",
      h_closed: "Fermé",
      h_note: "Horaires relevés sur TripAdvisor. La fiche Google affiche des horaires différents le dimanche et le lundi : un petit appel permet de confirmer avant de venir.",
      vis_c3t: "Venir",
      tr_1: "Gare de Territet à environ 200 mètres",
      tr_2: "Bus sur la route du château de Chillon",
      tr_3: "Parking dans la rue",
      tr_4: "À quelques minutes du centre de Montreux, direction Chillon",
      foot_line: "Grill argentin à Territet, entre Montreux et le château de Chillon.",
      foot_small: "Site de démonstration réalisé pour le restaurant. Photos d’illustration. Horaires et carte à confirmer par la maison.",
      bar_call: "Appeler",
      bar_book: "Réserver",
      bar_dir: "Itinéraire",
      bar_menu: "Carte"
    },
    en: {
      doc_title: "Tango Argentinian Grill · Territet, Montreux",
      brand_sub: "Argentinian Grill · Territet",
      hero_rating: "4.8 on Google, 116 reviews",
      hero_cuisine: "Argentinian grill",
      hero_l1: "Argentinian",
      hero_l2: "embers",
      rotate_label: "On the fire tonight:",
      hero_lede: "Beef imported from Argentina, cooked over embers and served with chimichurri, Malbec by the glass, in a small dining room in Territet, between Montreux and Chillon Castle.",
      cta_call: "Book by phone",
      cta_menu: "See the menu",
      hero_hours: "Tue to Sat: lunch and dinner · Sun: lunch",
      num_48: "4.8",
      trust_1: "on Google, 116 reviews",
      trust_2: "of Territet restaurants on TripAdvisor",
      trust_3n: "Argentina",
      trust_3: "where the beef comes from, imported",
      trust_4: "seats, a room on a human scale",
      chip_1: "The parrilla",
      chip_2: "Gallery",
      chip_3: "The menu",
      chip_4: "The cellar",
      chip_5: "The patron",
      chip_6: "Find us",
      par_title: "Fire, beef, craft.",
      par_p1: "Here, everything goes through the embers. The cuts arrive from Argentina, the patron grills them to order and serves them the way they do back home: coarse salt, chimichurri, baked potato.",
      par_p2: "The centrepiece is the parrillada: the mixed grill that arrives sizzling on its heated platter, set in the middle of the table to share.",
      stat_1: "the weight of your cut, your choice",
      stat_2n: "4 cuts",
      stat_2: "in the parrillada: filet, entrecôte, rump and veal",
      stat_3: "of the beef imported from Argentina",
      par_tag: "On the fire, to order",
      gal_title: "What comes off the embers",
      gal_hint: "Swipe to browse the dishes.",
      dish_1: "The mixed grill that arrives sizzling, made for sharing.",
      dish_2: "The starter reviewers praise most, year after year.",
      dish_3: "The Argentinian name for entrecôte, served with chimichurri.",
      dish_4n: "The dining room",
      dish_4: "20 to 30 seats, in the colours of La Boca, the Buenos Aires neighbourhood.",
      dish_5: "By the glass or the bottle, the Argentinian red of the grill.",
      menu_title: "The board by the grill",
      menu_intro: "The dishes below are the ones guests describe in their reviews and the guides. The full menu is discovered at the table or by phone.",
      cat_1: "Starters",
      cat_2: "From the parrilla",
      cat_3: "Sides",
      cat_4: "Desserts",
      cat_5: "Drinks",
      mi_emp: "Golden beef turnovers, the classic opening.",
      mi_cho_n: "Grilled chorizo",
      mi_cho: "The Argentinian sausage, grilled, as a first plate.",
      mi_pain_n: "Bread and its two sauces",
      mi_pain: "Bread comes to the table with two sauces.",
      grill_note: "Cuts from 200 to 500 g, depending on your appetite, grilled to order.",
      mi_bife: "The Argentinian entrecôte, served with chimichurri.",
      mi_lomo: "The filet, the most tender cut on the menu.",
      mi_rum_n: "Argentinian rump heart",
      mi_rum: "The rump cut, for those who like a bold flavour.",
      mi_cote_n: "Beef rib",
      mi_cote: "Served with chimichurri, as guests describe it in their reviews.",
      mi_chu: "With baked potato, grilled vegetables and chimichurri.",
      mi_par: "The mixed grill to share: filet, entrecôte, rump and veal, a grilled vegetable skewer and baked potato, served sizzling.",
      mi_poulet_n: "Chicken",
      mi_poulet: "The poultry option on the menu, for a change of pace.",
      mi_pdt_n: "Baked potato",
      mi_pdt: "Served with its sauce, the house side.",
      mi_leg_n: "Grilled vegetable skewer",
      mi_leg: "The vegetables go over the embers too.",
      mi_frites_n: "French fries",
      mi_frites: "To go with the grilled cuts.",
      mi_chimi: "The Argentinian herb sauce, companion to every cut.",
      mi_des_n: "Classic Argentinian desserts",
      mi_des: "The Argentinian classics, to discover at the table.",
      mi_glace_n: "Ice creams",
      mi_glace: "Ice creams and an iced dessert, a gentle finish.",
      mi_malbec: "The Argentinian red, by the glass or the bottle.",
      mi_vins_n: "Argentinian red wines",
      mi_vins: "The heart of the cellar, several wines poured by the glass.",
      mi_suisses_n: "Swiss wines",
      mi_suisses: "The list also keeps a place for local wines.",
      mi_quilmes: "The Argentinian beer, to start with, on the terrace or inside.",
      menu_note: "Prices are not shown on this page yet: they will be added as soon as the house confirms them. In the meantime, one call is enough to hear the menu and book your table.",
      cave_title: "A bar lined with Argentinian bottles",
      cave_copy: "Guides have noticed it for years: behind the bar, Argentinian bottles line the wall. Malbec by the glass, fine reds from Argentina, and a few Swiss wines for the curious. The patron will happily match a bottle to your cut.",
      cave_1: "Malbec by the glass",
      cave_2: "Reds from Argentina",
      cave_3: "Swiss wines too",
      pat_title: "An Argentinian, his embers, his room.",
      pat_p1: "The patron is Argentinian. He welcomes you, serves you, advises on the cut and the cooking, and happily tells you where the beef comes from: Argentina, imported for his parrilla.",
      pat_p2: "Around him, a small family team, about twenty seats, old tangos playing softly and walls in the colours of La Boca. Reviews have told the same scene since 2011, and that is exactly why people come back.",
      pat_c1: "Argentinian patron",
      pat_c2: "Beef imported from Argentina",
      pat_c3: "20 to 30 seats",
      pat_c4: "Argentinian tangos in the background",
      pat_c5: "Booking recommended",
      pat_c6: "Cards and digital payments accepted",
      pat_rating: "116 reviews on Google, and No. 1 of Territet restaurants on TripAdvisor (4.5).",
      pat_tag: "The dining room, La Boca side",
      vis_title: "On the castle road",
      vis_c1t: "Address and contact",
      vis_dir: "Directions",
      vis_c2t: "Opening hours",
      h_d1: "Tuesday to Saturday",
      h_d2: "Sunday",
      h_d3: "Monday",
      h_closed: "Closed",
      h_note: "Hours as listed on TripAdvisor. Google shows different hours on Sunday and Monday, so a quick call confirms before you come.",
      vis_c3t: "Getting here",
      tr_1: "Territet station about 200 metres away",
      tr_2: "Bus on the road to Chillon Castle",
      tr_3: "Street parking",
      tr_4: "A few minutes from Montreux centre, towards Chillon",
      foot_line: "Argentinian grill in Territet, between Montreux and Chillon Castle.",
      foot_small: "Demo website made for the restaurant. Illustrative photos. Hours and menu to be confirmed by the house.",
      bar_call: "Call",
      bar_book: "Book",
      bar_dir: "Directions",
      bar_menu: "Menu"
    }
  };

  var ROTATE = {
    fr: ["Empanadas", "Parrillada", "Bife de chorizo", "Malbec"],
    en: ["Empanadas", "Parrillada", "Bife de chorizo", "Malbec"]
  };

  var current = "fr";
  var storeKey = "tango-lang";

  function applyLang(lang) {
    if (!I18N[lang]) lang = "fr";
    current = lang;
    var dict = I18N[lang];
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key]) nodes[i].textContent = dict[key];
    }
    document.documentElement.lang = lang;
    document.title = dict.doc_title;
    var btns = document.querySelectorAll(".lang-btn");
    for (var j = 0; j < btns.length; j++) {
      var active = btns[j].getAttribute("data-lang") === lang;
      btns[j].classList.toggle("is-active", active);
      btns[j].setAttribute("aria-pressed", active ? "true" : "false");
    }
    try { localStorage.setItem(storeKey, lang); } catch (e) {}
  }

  var langBtns = document.querySelectorAll(".lang-btn");
  for (var b = 0; b < langBtns.length; b++) {
    langBtns[b].addEventListener("click", function () {
      applyLang(this.getAttribute("data-lang"));
    });
  }

  var saved = null;
  try { saved = localStorage.getItem(storeKey); } catch (e) {}
  if (saved && saved !== "fr" && I18N[saved]) applyLang(saved);

  /* Rotating hero word */
  var rotator = document.getElementById("rotator");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (rotator && !reduceMotion) {
    var idx = 0;
    setInterval(function () {
      var words = ROTATE[current] || ROTATE.fr;
      rotator.classList.add("is-out");
      setTimeout(function () {
        idx = (idx + 1) % words.length;
        rotator.textContent = words[idx];
        rotator.classList.remove("is-out");
      }, 300);
    }, 3200);
  }

  /* Scroll reveals */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* Depth system (elevation): layered ember fields, scroll parallax
     planes, in-frame figure parallax, pointer tilt on dishes.
     Transform/opacity only, one shared rAF loop, paused off-screen,
     and never constructed at all under reduced motion. */
  if (!reduceMotion) {
    var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    function emberSprite(rgb) {
      var c = document.createElement("canvas");
      c.width = 64; c.height = 64;
      var g = c.getContext("2d");
      var grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255,240,214,1)");
      grad.addColorStop(0.25, "rgba(" + rgb + ",0.9)");
      grad.addColorStop(1, "rgba(" + rgb + ",0)");
      g.fillStyle = grad;
      g.fillRect(0, 0, 64, 64);
      return c;
    }

    function EmberField(canvas, total) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.total = total;
      this.parts = [];
      this.w = 0; this.h = 0;
      this.sprites = [
        emberSprite("228,87,46"),   /* ember */
        emberSprite("233,180,76"),  /* gold */
        emberSprite("199,57,43")    /* deep red */
      ];
      this.resize();
    }
    EmberField.prototype.resize = function () {
      var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      var r = this.canvas.getBoundingClientRect();
      this.w = Math.max(1, Math.round(r.width));
      this.h = Math.max(1, Math.round(r.height));
      this.canvas.width = Math.round(this.w * dpr);
      this.canvas.height = Math.round(this.h * dpr);
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!this.parts.length) this.seed();
    };
    EmberField.prototype.seed = function () {
      /* Three depth planes: far = small, dim, slow; near = large,
         brighter, faster. Size + speed + alpha sell the depth. */
      var layers = [
        { share: 0.42, size: [1.5, 3.5], speed: [6, 12], alpha: [0.10, 0.28], sprite: 2 },
        { share: 0.36, size: [3, 6], speed: [12, 22], alpha: [0.25, 0.50], sprite: 0 },
        { share: 0.22, size: [5, 10], speed: [20, 36], alpha: [0.40, 0.75], sprite: 1 }
      ];
      var rnd = function (a, b) { return a + Math.random() * (b - a); };
      this.parts = [];
      for (var li = 0; li < layers.length; li++) {
        var L = layers[li];
        var n = Math.round(this.total * L.share);
        for (var i = 0; i < n; i++) {
          this.parts.push({
            x: Math.random(), y: Math.random(),
            size: rnd(L.size[0], L.size[1]),
            speed: rnd(L.speed[0], L.speed[1]),
            alpha: rnd(L.alpha[0], L.alpha[1]),
            sprite: L.sprite,
            sway: rnd(4, 14),
            phase: rnd(0, Math.PI * 2),
            flick: rnd(0.6, 1.6)
          });
        }
      }
    };
    EmberField.prototype.step = function (t, dt) {
      var ctx = this.ctx, w = this.w, h = this.h;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (var i = 0; i < this.parts.length; i++) {
        var p = this.parts[i];
        p.y -= (p.speed * dt) / h;
        if (p.y < -0.04) { p.y = 1.04; p.x = Math.random(); }
        var x = (p.x * w) + Math.sin(t * 0.0004 * p.flick + p.phase) * p.sway;
        var y = p.y * h;
        var a = p.alpha * (0.72 + 0.28 * Math.sin(t * 0.002 * p.flick + p.phase));
        ctx.globalAlpha = Math.max(0, a);
        var s = p.size * 3; /* sprite carries the soft falloff */
        ctx.drawImage(this.sprites[p.sprite], x - s / 2, y - s / 2, s, s);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };

    var hero = document.querySelector(".hero");
    var heroImg = document.querySelector(".hero-img");
    var heroCanvas = document.getElementById("heroEmbers");
    var heroInner = document.querySelector(".hero-inner");
    var figCanvas = document.getElementById("figEmbers");
    var heroField = heroCanvas ? new EmberField(heroCanvas, window.innerWidth < 720 ? 34 : 62) : null;
    var figField = figCanvas ? new EmberField(figCanvas, 14) : null;

    /* Fields only draw while their section is on screen. */
    var view = { hero: false, fig: false };
    if ("IntersectionObserver" in window) {
      var vio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.target === hero) view.hero = e.isIntersecting;
          else view.fig = e.isIntersecting;
        });
      }, { rootMargin: "80px" });
      if (hero) vio.observe(hero);
      var parFig = document.querySelector(".parrilla-fig");
      if (parFig) vio.observe(parFig);
    } else { view.hero = true; view.fig = true; }

    /* Pointer parallax over the hero (desktop, fine pointer only). */
    var px = 0, py = 0, tx = 0, ty = 0;
    if (hero && finePointer) {
      hero.addEventListener("pointermove", function (e) {
        var r = hero.getBoundingClientRect();
        tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
        ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      });
      hero.addEventListener("pointerleave", function () { tx = 0; ty = 0; });
    }

    /* In-frame parallax images (fire section + patron room). */
    var plxImgs = document.querySelectorAll(".parrilla-fig img, .patron-fig img");

    /* Perspective tilt on dish cards (fine pointer only; the mobile
       swipe rail is never touched). */
    var tiltCards = [];
    if (finePointer) {
      document.querySelectorAll(".dish").forEach(function (card) {
        var st = { el: card, cx: 0, cy: 0, gx: 0, gy: 0, active: false };
        card.addEventListener("pointerenter", function () {
          st.active = true;
          card.classList.add("tilt-live");
        });
        card.addEventListener("pointermove", function (e) {
          var r = card.getBoundingClientRect();
          st.gy = ((e.clientX - r.left) / r.width - 0.5) * 10;
          st.gx = -((e.clientY - r.top) / r.height - 0.5) * 10;
        });
        card.addEventListener("pointerleave", function () {
          st.gx = 0; st.gy = 0; st.active = false;
        });
        tiltCards.push(st);
      });
    }

    var lastT = 0;
    function frame(t) {
      var dt = Math.min(0.05, lastT ? (t - lastT) / 1000 : 0.016);
      lastT = t;
      var y = window.scrollY || 0;
      var vh = window.innerHeight;

      /* Hero planes separate as you scroll: photo 0.12, embers 0.05,
         content slightly against the scroll (-0.03). */
      if (y < vh * 1.2) {
        if (heroImg) heroImg.style.transform = "scale(1.06) translateY(" + (y * 0.12).toFixed(1) + "px)";
        px += (tx - px) * 0.06;
        py += (ty - py) * 0.06;
        if (heroCanvas) heroCanvas.style.transform = "translate3d(" + (px * 10).toFixed(1) + "px," + (y * 0.05 + py * 8).toFixed(1) + "px,0)";
        if (heroInner) heroInner.style.transform = "translate3d(" + (px * -6).toFixed(1) + "px," + (y * -0.03 + py * -5).toFixed(1) + "px,0)";
      }
      if (heroField && view.hero) heroField.step(t, dt);
      if (figField && view.fig) figField.step(t, dt);

      for (var i = 0; i < plxImgs.length; i++) {
        var img = plxImgs[i];
        var r = img.parentElement.getBoundingClientRect();
        if (r.bottom > -80 && r.top < vh + 80) {
          var prog = (r.top + r.height / 2 - vh / 2) / vh;
          if (prog > 1) prog = 1;
          if (prog < -1) prog = -1;
          img.style.transform = "scale(1.14) translateY(" + (-prog * 16).toFixed(1) + "px)";
        }
      }

      for (var j = 0; j < tiltCards.length; j++) {
        var st = tiltCards[j];
        st.cx += (st.gx - st.cx) * 0.12;
        st.cy += (st.gy - st.cy) * 0.12;
        if (st.active || Math.abs(st.cx) > 0.01 || Math.abs(st.cy) > 0.01) {
          st.el.style.transform = "perspective(900px) rotateX(" + st.cx.toFixed(2) + "deg) rotateY(" + st.cy.toFixed(2) + "deg)";
        } else if (st.el.style.transform) {
          st.el.style.transform = "";
          st.el.classList.remove("tilt-live");
        }
      }

      window.requestAnimationFrame(frame);
    }
    window.requestAnimationFrame(frame);

    var resizeTimer = null;
    window.addEventListener("resize", function () {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(function () {
        if (heroField) heroField.resize();
        if (figField) figField.resize();
      }, 200);
    });
  }
})();
