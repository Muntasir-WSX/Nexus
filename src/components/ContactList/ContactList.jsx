"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronUp, Plus, RotateCcw } from "lucide-react";
import dashboardData from "@/data/dasboardData.json";

function shuffleList(items) {
	const copy = [...items];
	for (let i = copy.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy;
}

function SectionHeader({ count, title }) {
	return (
		<div className="flex items-center justify-between px-2 py-4">
			<div className="flex items-center gap-3">
				<span className="min-w-[28px] rounded-lg bg-white px-2 py-1 text-center text-[10px] font-bold text-gray-700 shadow-sm">
					{count}
				</span>
				<h3 className="text-[12px] font-semibold tracking-tight text-gray-700">{title}</h3>
			</div>
			<ChevronUp size={14} className="text-gray-300" />
		</div>
	);
}

function ContactRow({ contact, active, onClick }) {
	return (
		<motion.button
			type="button"
			onClick={onClick}
			whileHover={{ y: -1 }}
			whileTap={{ scale: 0.995 }}
			className={`relative mb-1 flex w-full items-center justify-between rounded-[16px] px-2 py-2 text-left transition-all ${
				active ? "bg-white shadow-[0_6px_18px_rgba(0,0,0,0.04)]" : "hover:bg-white/60"
			}`}
		>
			<div className="flex min-w-0 items-center gap-3">
				<div
					className={`h-9 w-9 shrink-0 overflow-hidden rounded-xl ${
						active ? "bg-[#F3FF90]" : "bg-[#E8EDE9]"
					}`}
				>
					<img
						src={contact.avatar}
						alt={contact.name}
						className={`h-full w-full object-cover ${active ? "mix-blend-multiply" : ""}`}
					/>
				</div>
				<div className="min-w-0">
					<p className="truncate text-[12px] font-semibold text-gray-800">{contact.name}</p>
					<p className="truncate text-[10px] font-medium text-gray-400">{contact.role}</p>
				</div>
			</div>

			<AnimatePresence>
				{active ? (
					<motion.span
						initial={{ opacity: 0, x: 4 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 4 }}
						className="absolute right-0 h-6 w-[3px] rounded-l-full bg-black"
					/>
				) : null}
			</AnimatePresence>
		</motion.button>
	);
}

export default function ContactList({ onContactSelect }) {
	const shuffledContacts = useMemo(() => shuffleList(dashboardData.contacts), []);
	const shuffledFavorites = useMemo(() => shuffleList(dashboardData.favorite_contacts), []);
	const [activeContactId, setActiveContactId] = useState(shuffledContacts[0]?.id ?? null);

	const allContacts = useMemo(() => [...shuffledContacts, ...shuffledFavorites], [shuffledContacts, shuffledFavorites]);

	useEffect(() => {
		if (!allContacts.length || !onContactSelect) return;
		const initial = allContacts.find((item) => item.id === activeContactId) ?? allContacts[0];
		onContactSelect(initial);
	}, [activeContactId, allContacts, onContactSelect]);

	const handleSelect = (contact) => {
		setActiveContactId(contact.id);
		onContactSelect?.(contact);
	};

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="flex h-full w-[280px] flex-col pr-1">
			<div className="mb-5 flex items-center justify-between px-2">
				<h2 className="text-[42px] font-light leading-none tracking-tighter text-gray-800">All Contacts</h2>
				<div className="flex items-center gap-1.5">
					<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="button" className="rounded-xl border border-gray-100 bg-white p-1.5 text-gray-500 shadow-sm">
						<ArrowLeft size={14} />
					</motion.button>
					<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="button" className="rounded-xl border border-gray-100 bg-white p-1.5 text-gray-500 shadow-sm">
						<ArrowRight size={14} />
					</motion.button>
					<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="button" className="rounded-xl border border-gray-100 bg-white p-1.5 text-gray-500 shadow-sm">
						<RotateCcw size={14} />
					</motion.button>
				</div>
			</div>

			<div className="custom-scrollbar flex-1 overflow-y-auto pr-1">
				<button
					type="button"
					className="mb-2 flex w-full items-center justify-center gap-2 rounded-[18px] border border-dashed border-gray-200/80 py-3 text-[12px] font-semibold text-gray-500 hover:border-gray-300"
				>
					<Plus size={15} />
					New contact
				</button>

				<SectionHeader count={shuffledContacts.length} title="New contact" />
				{shuffledContacts.map((contact) => (
					<ContactRow
						key={contact.id}
						contact={contact}
						active={activeContactId === contact.id}
						onClick={() => handleSelect(contact)}
					/>
				))}

				<SectionHeader count={shuffledFavorites.length} title="Favorites contact" />
				{shuffledFavorites.map((contact) => (
					<ContactRow
						key={contact.id}
						contact={contact}
						active={activeContactId === contact.id}
						onClick={() => handleSelect(contact)}
					/>
				))}
			</div>
		</motion.div>
	);
}
