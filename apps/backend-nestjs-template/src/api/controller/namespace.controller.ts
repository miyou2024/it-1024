import { Body, Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import {
  NamespaceCreateRequestDto,
  NamespaceCreateResponseDto,
  NamespaceDeleteRequestDto,
  NamespaceDeleteResponseDto,
  NamespaceGetDetailRequestDto,
  NamespaceGetDetailResponseDto,
  NamespaceGetListRequestDto,
  NamespaceGetListResponseDto,
  NamespacePatchRequestDto,
  NamespacePatchResponseDto,
  NamespacePutRequestDto,
  NamespacePutResponseDto,
} from '#dto/namespace';
import { ApiCommonResponseDetail } from '#dto/common';

@Controller('namespace')
export class NamespaceController {
  @ApiOperation({
    summary: 'Create a namespace',
    description: 'Create a new namespace',
  })
  @ApiCommonResponseDetail(NamespaceCreateResponseDto)
  @Post('create')
  create(@Body() body: NamespaceCreateRequestDto) {
    return {
      body,
    };
  }

  @ApiOperation({
    summary: 'Put a namespace',
    description: 'Put a new namespace',
  })
  @ApiCommonResponseDetail(NamespacePutResponseDto)
  @Put(':id')
  put(@Body() body: NamespacePutRequestDto) {
    return { body };
  }

  @ApiOperation({
    summary: 'Patch a namespace',
    description: 'Patch a new namespace',
  })
  @ApiCommonResponseDetail(NamespacePatchResponseDto)
  @Patch(':id')
  patch(@Body() body: NamespacePatchRequestDto) {
    return { body };
  }

  @ApiOperation({
    summary: 'Delete a namespace',
    description: 'Delete a new namespace',
  })
  @ApiCommonResponseDetail(NamespaceDeleteResponseDto)
  @Delete(':id')
  delete(@Body() body: NamespaceDeleteRequestDto) {
    return { body };
  }

  @ApiOperation({
    summary: 'Get all namespaces',
    description: 'Get all namespaces',
  })
  @ApiCommonResponseDetail(NamespaceGetListResponseDto)
  @Get('list')
  getList(@Body() body: NamespaceGetListRequestDto) {
    return { body };
  }

  @ApiOperation({
    summary: 'Get one namespace',
    description: 'Get one namespaces',
  })
  @ApiCommonResponseDetail(NamespaceGetDetailResponseDto)
  @Get(':id')
  getDetail(@Body() body: NamespaceGetDetailRequestDto) {
    return { body };
  }
}
