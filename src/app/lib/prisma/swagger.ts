/**
 * Nome do arquivo: route.ts
 * Data de criação: 25/08/2025
 * Autor: Jean Caetano
 * Matrícula: 01735073
 *
 * Descrição:
 * Implementar Swagger para documentação da API.
 * Este script é parte o curso de ADS.
 */

import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gerenciamento de Clientes',
      version: '1.0.0',
      description: 'Uma API para um CRUD de Clientes, desenvolvida para o curso de ADS.',
    },
    // TODAS AS ROTAS E MÉTODOS
    paths: {
      '/clientes': {
        get: {
          summary: 'Lista todos os clientes',
          tags: ['Clientes'],
          description: 'Retorna uma lista de todos os clientes.',
          responses: {
            '200': {
              description: 'Sucesso - Retorna a lista de clientes.',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: { $ref: '#/components/schemas/Cliente' },
                  },
                },
              },
            },
          },
        },
        post: {
          summary: 'Cria um novo cliente',
          tags: ['Clientes'],
          description: 'Adiciona um novo cliente.',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Cliente' },
              },
            },
          },
          responses: {
            '201': {
              description: 'Cliente criado com sucesso.',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Cliente' },
                },
              },
            },
          },
        },
      },
      '/clientes/{id}': {
        patch: {
          summary: 'Atualiza um cliente existente',
          tags: ['Clientes'],
          description: 'Atualiza os dados de um cliente pelo seu ID.',
          parameters: [
            {
              in: 'path',
              name: 'id',
              required: true,
              schema: { type: 'string', format: 'uuid' },
              description: 'O ID do cliente.',
            },
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Cliente' },
              },
            },
          },
          responses: {
            '200': {
              description: 'Cliente atualizado com sucesso.',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Cliente' },
                },
              },
            },
          },
        },
        delete: {
          summary: 'Deleta um cliente',
          tags: ['Clientes'],
          description: 'Remove um cliente pelo seu ID.',
          parameters: [
            {
              in: 'path',
              name: 'id',
              required: true,
              schema: { type: 'string', format: 'uuid' },
              description: 'O ID do cliente.',
            },
          ],
          responses: {
            '204': {
              description: 'Cliente deletado com sucesso.',
            },
          },
        },
      },
    },
    // A seção de Schemas (modelos)
    components: {
      schemas: {
        Cliente: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            created_at: { type: 'string', format: 'date-time' },
            nome: { type: 'string' },
            email: { type: 'string', format: 'email' },
            telefone: { type: 'string' },
            cpf: { type: 'string' },
          },
        },
      },
    },
  },
  apis: [], 
};

export const openApiSpecification = swaggerJsdoc(options);