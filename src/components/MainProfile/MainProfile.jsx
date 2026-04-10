"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Mail, MapPin, Phone } from "lucide-react";

function InfoPill({ icon: Icon, label, value }) {
	return (
		<div className="flex min-w-0 items-center gap-2 rounded-2xl border border-white/70 bg-white/60 px-3 py-2 shadow-sm">
			<div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-gray-500">
				<Icon size={14} />
			</div>
			<div className="min-w-0">
				<p className="truncate text-[10px] font-medium text-gray-400">{label}</p>
				<p className="truncate text-[12px] font-semibold text-gray-700">{value}</p>
			</div>
		</div>
	);
}

function StatCard({ title, value, color }) {
	return (
		<div className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm">
			<p className="text-[11px] font-medium text-gray-500">{title}</p>
			<p className="mt-1 text-[44px] leading-none font-light tracking-tight text-gray-800">{value}</p>
			<div className="mt-4 h-5 rounded-lg bg-gray-100 p-[2px]">
				<div className="h-full w-2/3 rounded-md" style={{ backgroundColor: color }} />
			</div>
		</div>
	);
}

export default function MainProfile({ contact, propertyPreview }) {
	if (!contact) {
		return (
			<div className="grid h-full place-items-center text-sm text-gray-400">
				Select a contact to view details
			</div>
		);
	}

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={contact.id}
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -8 }}
				transition={{ duration: 0.28, ease: "easeOut" }}
				className="h-full min-w-0 px-2 pb-4 md:px-4"
			>
			<div className="grid gap-6 md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
				<div className="relative">
					<div className="overflow-hidden rounded-t-[110px] rounded-b-[36px] bg-white shadow-sm">
						<img
							src={contact.avatar}
							alt={contact.name}
							className="h-52 w-full object-cover object-top md:h-56 lg:h-[230px]"
						/>
					</div>
				</div>

				<div className="min-w-0 pt-3">
					<h2 className="text-3xl font-light leading-none tracking-tight text-gray-800 md:text-[34px] lg:text-[38px]">{contact.name}</h2>
					<div className="mt-5 grid gap-3 md:grid-cols-2">
						<InfoPill icon={Phone} label="Phone number" value={contact.phone} />
						<InfoPill icon={Mail} label="Email" value={contact.email} />
						<InfoPill icon={MapPin} label="Location" value={contact.location} />
						<InfoPill icon={Briefcase} label="Specialty" value={contact.specialty} />
					</div>
				</div>
			</div>

			<div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
				<StatCard title="Average score" value={contact.stats.averageScore} color="#F3FF90" />
				<StatCard title="Deal Started" value={contact.stats.dealStarted} color="#F3FF90" />
				<StatCard title="Lost Deals" value={contact.stats.lostDeals} color="#FFA08C" />
				<StatCard title="Won Deals" value={contact.stats.wonDeals} color="#B6FA61" />
			</div>

			<div className="mt-6 rounded-3xl border border-white/70 bg-white/70 p-3 shadow-sm">
				<img
					src={propertyPreview?.image}
					alt={propertyPreview?.address || "Property preview"}
					className="h-40 w-full rounded-2xl object-cover md:h-48 lg:h-[160px]"
				/>
				<p className="mt-3 text-[18px] font-light leading-tight text-gray-800 md:text-[20px] lg:text-[22px]">{propertyPreview?.address}</p>
			</div>
			</motion.div>
		</AnimatePresence>
	);
}
