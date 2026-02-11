import { pgTable, text, integer, decimal, timestamp, boolean, uuid, jsonb } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const cardIssuers = pgTable('card_issuers', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  logo: text('logo'),
});

export const creditCards = pgTable('credit_cards', {
  id: uuid('id').defaultRandom().primaryKey(),
  issuerId: uuid('issuer_id').references(() => cardIssuers.id),
  name: text('name').notNull(),
  network: text('network').notNull(),
  annualFee: decimal('annual_fee', { precision: 10, scale: 2 }).default('0'),
  image: text('image'),
  color: text('color'),
});

export const categories = pgTable('categories', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull().unique(),
  icon: text('icon'),
  mccCodes: jsonb('mcc_codes').$type<string[]>(),
});

export const merchants = pgTable('merchants', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  domain: text('domain'),
  categoryId: uuid('category_id').references(() => categories.id),
  logo: text('logo'),
});

export const rewardRules = pgTable('reward_rules', {
  id: uuid('id').defaultRandom().primaryKey(),
  cardId: uuid('card_id').references(() => creditCards.id).notNull(),
  categoryId: uuid('category_id').references(() => categories.id),
  merchantId: uuid('merchant_id').references(() => merchants.id),
  rewardType: text('reward_type').notNull(),
  rewardRate: decimal('reward_rate', { precision: 5, scale: 2 }).notNull(),
  maxRewardPerMonth: decimal('max_reward_per_month', { precision: 10, scale: 2 }),
  isRotating: boolean('is_rotating').default(false),
  startsAt: timestamp('starts_at'),
  endsAt: timestamp('ends_at'),
  description: text('description'),
});

export const userCards = pgTable('user_cards', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  cardId: uuid('card_id').references(() => creditCards.id).notNull(),
  nickname: text('nickname'),
  lastFour: text('last_four'),
  addedAt: timestamp('added_at').defaultNow().notNull(),
  isActive: boolean('is_active').default(true),
});

export const usersRelations = relations(users, ({ many }) => ({
  userCards: many(userCards),
}));

export const creditCardsRelations = relations(creditCards, ({ one, many }) => ({
  issuer: one(cardIssuers, {
    fields: [creditCards.issuerId],
    references: [cardIssuers.id],
  }),
  rewardRules: many(rewardRules),
}));

export const rewardRulesRelations = relations(rewardRules, ({ one }) => ({
  card: one(creditCards, {
    fields: [rewardRules.cardId],
    references: [creditCards.id],
  }),
  category: one(categories, {
    fields: [rewardRules.categoryId],
    references: [categories.id],
  }),
  merchant: one(merchants, {
    fields: [rewardRules.merchantId],
    references: [merchants.id],
  }),
}));

export const userCardsRelations = relations(userCards, ({ one }) => ({
  user: one(users, {
    fields: [userCards.userId],
    references: [users.id],
  }),
  card: one(creditCards, {
    fields: [userCards.cardId],
    references: [creditCards.id],
  }),
}));
