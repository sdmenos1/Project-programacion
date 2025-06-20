import { c as createComponent, e as createAstro, m as maybeRenderHead, d as addAttribute, b as renderScript, a as renderTemplate, r as renderComponent } from '../../chunks/astro/server_DMAQJEd5.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../../chunks/Footer_BbVr7bPF.mjs';
import 'clsx';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$UserProfile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$UserProfile;
  const { user } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="user-profile" data-astro-cid-nboiwwvl> <div class="container" data-astro-cid-nboiwwvl> <!-- Profile Header --> <div class="profile-header" data-astro-cid-nboiwwvl> <div class="profile-cover" data-astro-cid-nboiwwvl> <div class="cover-overlay" data-astro-cid-nboiwwvl></div> </div> <div class="profile-info" data-astro-cid-nboiwwvl> <div class="avatar-section" data-astro-cid-nboiwwvl> <img${addAttribute(user.avatar || "/placeholder.svg", "src")}${addAttribute(user.name, "alt")} class="profile-avatar" data-astro-cid-nboiwwvl> ${user.vipStatus && renderTemplate`<span class="vip-badge" data-astro-cid-nboiwwvl>👑 VIP</span>`} </div> <div class="user-details" data-astro-cid-nboiwwvl> <h1 class="user-name" data-astro-cid-nboiwwvl>${user.name}</h1> <p class="user-username" data-astro-cid-nboiwwvl>@${user.username}</p> <p class="member-since" data-astro-cid-nboiwwvl>Miembro desde ${user.memberSince}</p> </div> </div> </div> <!-- Profile Navigation --> <div class="profile-nav" data-astro-cid-nboiwwvl> <button class="nav-tab active" data-tab="info" data-astro-cid-nboiwwvl>Información</button> <button class="nav-tab" data-tab="events" data-astro-cid-nboiwwvl>Eventos</button> <button class="nav-tab" data-tab="preferences" data-astro-cid-nboiwwvl>Preferencias</button> </div> <!-- Profile Content --> <div class="profile-content" data-astro-cid-nboiwwvl> <!-- Info Tab --> <div class="tab-content active" id="info-tab" data-astro-cid-nboiwwvl> <div class="info-grid" data-astro-cid-nboiwwvl> <div class="info-card" data-astro-cid-nboiwwvl> <h3 class="card-title" data-astro-cid-nboiwwvl>Información Personal</h3> <div class="info-items" data-astro-cid-nboiwwvl> <div class="info-item" data-astro-cid-nboiwwvl> <span class="info-label" data-astro-cid-nboiwwvl>Nombre:</span> <span class="info-value" data-astro-cid-nboiwwvl>${user.name}</span> </div> <div class="info-item" data-astro-cid-nboiwwvl> <span class="info-label" data-astro-cid-nboiwwvl>Email:</span> <span class="info-value" data-astro-cid-nboiwwvl>${user.email}</span> </div> <div class="info-item" data-astro-cid-nboiwwvl> <span class="info-label" data-astro-cid-nboiwwvl>Edad:</span> <span class="info-value" data-astro-cid-nboiwwvl>${user.age} años</span> </div> <div class="info-item" data-astro-cid-nboiwwvl> <span class="info-label" data-astro-cid-nboiwwvl>Género:</span> <span class="info-value" data-astro-cid-nboiwwvl>${user.gender}</span> </div> <div class="info-item" data-astro-cid-nboiwwvl> <span class="info-label" data-astro-cid-nboiwwvl>Fecha de Nacimiento:</span> <span class="info-value" data-astro-cid-nboiwwvl>${user.fechaNacimiento}</span> </div> </div> </div> <div class="info-card" data-astro-cid-nboiwwvl> <h3 class="card-title" data-astro-cid-nboiwwvl>Estadísticas</h3> <div class="stats-grid" data-astro-cid-nboiwwvl> <div class="stat-item" data-astro-cid-nboiwwvl> <span class="stat-number" data-astro-cid-nboiwwvl>${user.eventsAttended}</span> <span class="stat-label" data-astro-cid-nboiwwvl>Eventos Asistidos</span> </div> <div class="stat-item" data-astro-cid-nboiwwvl> <span class="stat-number" data-astro-cid-nboiwwvl>${user.vipStatus ? "VIP" : "Regular"}</span> <span class="stat-label" data-astro-cid-nboiwwvl>Estado</span> </div> <div class="stat-item" data-astro-cid-nboiwwvl> <span class="stat-number" data-astro-cid-nboiwwvl>${user.favoriteGenres.length}</span> <span class="stat-label" data-astro-cid-nboiwwvl>Géneros Favoritos</span> </div> </div> </div> <div class="info-card" data-astro-cid-nboiwwvl> <h3 class="card-title" data-astro-cid-nboiwwvl>Géneros Musicales Favoritos</h3> <div class="genres-list" data-astro-cid-nboiwwvl> ${user.favoriteGenres.map((genre) => renderTemplate`<span class="genre-tag" data-astro-cid-nboiwwvl>${genre}</span>`)} </div> </div> </div> </div> <!-- Events Tab --> <div class="tab-content" id="events-tab" data-astro-cid-nboiwwvl> <div class="events-section" data-astro-cid-nboiwwvl> <h3 class="section-title" data-astro-cid-nboiwwvl>Próximos Eventos</h3> <div class="events-grid" data-astro-cid-nboiwwvl> ${user.upcomingEvents.length > 0 ? user.upcomingEvents.map((event) => renderTemplate`<div class="event-item" data-astro-cid-nboiwwvl> <img${addAttribute(event.image || "/placeholder.svg", "src")}${addAttribute(event.title, "alt")} class="event-image" data-astro-cid-nboiwwvl> <div class="event-info" data-astro-cid-nboiwwvl> <h4 class="event-title" data-astro-cid-nboiwwvl>${event.title}</h4> <p class="event-date" data-astro-cid-nboiwwvl>${event.date}</p> <p class="event-artist" data-astro-cid-nboiwwvl>${event.artist}</p> </div> </div>`) : renderTemplate`<p class="no-events" data-astro-cid-nboiwwvl>No tienes eventos próximos</p>`} </div> </div> <div class="events-section" data-astro-cid-nboiwwvl> <h3 class="section-title" data-astro-cid-nboiwwvl>Eventos Pasados</h3> <div class="events-grid" data-astro-cid-nboiwwvl> ${user.pastEvents.length > 0 ? user.pastEvents.map((event) => renderTemplate`<div class="event-item past" data-astro-cid-nboiwwvl> <img${addAttribute(event.image || "/placeholder.svg", "src")}${addAttribute(event.title, "alt")} class="event-image" data-astro-cid-nboiwwvl> <div class="event-info" data-astro-cid-nboiwwvl> <h4 class="event-title" data-astro-cid-nboiwwvl>${event.title}</h4> <p class="event-date" data-astro-cid-nboiwwvl>${event.date}</p> <p class="event-artist" data-astro-cid-nboiwwvl>${event.artist}</p> </div> </div>`) : renderTemplate`<p class="no-events" data-astro-cid-nboiwwvl>No has asistido a eventos aún</p>`} </div> </div> </div> <!-- Preferences Tab --> <div class="tab-content" id="preferences-tab" data-astro-cid-nboiwwvl> <div class="preferences-form" data-astro-cid-nboiwwvl> <h3 class="section-title" data-astro-cid-nboiwwvl>Configuración de Cuenta</h3> <div class="preference-item" data-astro-cid-nboiwwvl> <label class="preference-label" data-astro-cid-nboiwwvl> <input type="checkbox"${addAttribute(user.preferences.notifications, "checked")} data-astro-cid-nboiwwvl> <span class="checkmark" data-astro-cid-nboiwwvl></span>
Recibir notificaciones de eventos
</label> </div> <div class="preference-item" data-astro-cid-nboiwwvl> <label class="preference-label" data-astro-cid-nboiwwvl> <input type="checkbox"${addAttribute(user.preferences.newsletter, "checked")} data-astro-cid-nboiwwvl> <span class="checkmark" data-astro-cid-nboiwwvl></span>
Suscribirse al newsletter
</label> </div> <div class="preference-item" data-astro-cid-nboiwwvl> <label class="preference-label" data-astro-cid-nboiwwvl> <input type="checkbox"${addAttribute(user.preferences.publicProfile, "checked")} data-astro-cid-nboiwwvl> <span class="checkmark" data-astro-cid-nboiwwvl></span>
Perfil público
</label> </div> <button class="btn btn-save" data-astro-cid-nboiwwvl>Guardar Cambios</button> </div> </div> </div> </div> </section>  ${renderScript($$result, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/components/UserProfile.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/components/UserProfile.astro", void 0);

const usersData = [
	{
		id: 1,
		username: "juan_perez",
		name: "Juan Pérez",
		email: "juan@example.com",
		avatar: "/pictures/users/juan-avatar.jpg",
		age: 28,
		gender: "Masculino",
		fechaNacimiento: "1995-05-15",
		memberSince: "Enero 2023",
		vipStatus: true,
		eventsAttended: 15,
		favoriteGenres: [
			"Electronic",
			"Reggaeton",
			"Hip Hop"
		],
		upcomingEvents: [
			{
				id: 2,
				title: "Electronic Vibes",
				date: "2024-02-20",
				artist: "DJ Tiësto",
				image: "/pictures/events/electronic-vibes.jpg"
			}
		],
		pastEvents: [
			{
				id: 1,
				title: "Noche de Reggaeton",
				date: "2024-01-15",
				artist: "DJ Maluma",
				image: "/pictures/events/reggaeton-night.jpg"
			}
		],
		preferences: {
			notifications: true,
			newsletter: true,
			publicProfile: true
		}
	},
	{
		id: 2,
		username: "maria_garcia",
		name: "María García",
		email: "maria@example.com",
		avatar: "/pictures/users/maria-avatar.jpg",
		age: 25,
		gender: "Femenino",
		fechaNacimiento: "1998-08-22",
		memberSince: "Marzo 2023",
		vipStatus: false,
		eventsAttended: 8,
		favoriteGenres: [
			"Pop",
			"Salsa",
			"Rock"
		],
		upcomingEvents: [
		],
		pastEvents: [
			{
				id: 3,
				title: "Salsa y Bachata",
				date: "2024-01-25",
				artist: "Orquesta Latina",
				image: "/pictures/events/salsa-bachata.jpg"
			}
		],
		preferences: {
			notifications: false,
			newsletter: true,
			publicProfile: false
		}
	},
	{
		id: 3,
		username: "carlos_rodriguez",
		name: "Carlos Rodríguez",
		email: "carlos@example.com",
		avatar: "/pictures/users/carlos-avatar.jpg",
		age: 32,
		gender: "Masculino",
		fechaNacimiento: "1991-12-03",
		memberSince: "Octubre 2022",
		vipStatus: true,
		eventsAttended: 25,
		favoriteGenres: [
			"Rock",
			"Electronic",
			"Hip Hop"
		],
		upcomingEvents: [
			{
				id: 5,
				title: "Hip Hop Underground",
				date: "2024-03-05",
				artist: "MC Flow",
				image: "/pictures/events/hip-hop.jpg"
			}
		],
		pastEvents: [
			{
				id: 4,
				title: "Rock en Español",
				date: "2024-02-01",
				artist: "Banda Los Rebeldes",
				image: "/pictures/events/rock-espanol.jpg"
			}
		],
		preferences: {
			notifications: true,
			newsletter: false,
			publicProfile: true
		}
	}
];

const $$Astro = createAstro();
async function getStaticPaths() {
  return usersData.map((user) => ({
    params: { user: user.username },
    props: { user }
  }));
}
const $$user = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$user;
  const { user } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${user.name} - Perfil de Usuario`, "data-astro-cid-r4lywzpz": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-r4lywzpz": true })} ${maybeRenderHead()}<main class="profile-page" data-astro-cid-r4lywzpz> ${renderComponent($$result2, "UserProfile", $$UserProfile, { "user": user, "data-astro-cid-r4lywzpz": true })} </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-r4lywzpz": true })} ` })} `;
}, "C:/Users/User/astro-project-ta-progra/ta-programacion/src/pages/usuarios/[user].astro", void 0);

const $$file = "C:/Users/User/astro-project-ta-progra/ta-programacion/src/pages/usuarios/[user].astro";
const $$url = "/usuarios/[user]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$user,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
