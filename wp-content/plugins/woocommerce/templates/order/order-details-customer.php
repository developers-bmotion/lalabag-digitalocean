<?php
/**
 * Order Customer Details
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/order/order-details-customer.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.4.4
 */

defined( 'ABSPATH' ) || exit;

$show_shipping = ! wc_ship_to_billing_address_only() && $order->needs_shipping_address();
?>
<section class="woocommerce-customer-details">

	<?php if ( $show_shipping ) : ?>

	<section class="woocommerce-columns woocommerce-columns--2 woocommerce-columns--addresses col2-set addresses">
		<div class="woocommerce-column woocommerce-column--1 woocommerce-column--billing-address col-1">

	<?php endif; ?>

	<h2 class="woocommerce-column__title"><?php esc_html_e( 'Billing address', 'woocommerce' ); ?></h2>

	<address>
		<?php  /* CAMBIOS MI CUENTA */ $dataDir = $order->get_data_billing_address();?>
		<div id="info-billing" style="display: flex;">
			<div id="info-one" style="width: 50%;">
				<h5 style="margin: 5px 0;">Departamento:</h5>
				<span><?php echo $dataDir['state']; ?></span>
				<h5 style="margin: 5px 0;">Ciudad:</h5>
				<span><?php echo $dataDir['city']; ?></span>
				<h5 style="margin: 5px 0;">Dirección 1:</h5>
				<span><?php echo $dataDir['address_1']; ?></span>
				<h5 style="margin: 5px 0;">Dirección 2:</h5>
				<span><?php echo $dataDir['address_2']; ?></span>
			</div>
			<div id="info-one" style="width: 50%;">
				<h5 style="margin: 5px 0;">Nombre:</h5>
				<span><?php echo $dataDir['first_name'];  echo ' '; echo $dataDir['last_name']; ?></span>
				<?php if ( $dataDir['phone'] ) {
					echo '<h5 style="margin: 5px 0;">Teléfono:</h5>';
					echo '<span>'; echo $dataDir['phone']; echo '</span>';
				}?>
				<?php if ( $dataDir['email'] ) {
					echo '<h5 style="margin: 5px 0;">Correo:</h5>';
					echo '<span>'; echo $dataDir['email']; echo '</span>';
				}?>				
			</div>
		</div>
		
		<?php //echo wp_kses_post( $order->get_formatted_billing_address( esc_html__( 'N/A', 'woocommerce' ) ) ); ?>

		<?php //if ( $order->get_billing_phone() ) : ?>
			<!-- <p class="woocommerce-customer-details--phone">< ?php echo esc_html( $order->get_billing_phone() ); ?></p> -->
		<?php //endif; ?>

		<?php //if ( $order->get_billing_email() ) : ?>
			<!-- <p class="woocommerce-customer-details--email">< ?php echo esc_html( $order->get_billing_email() ); ?></p> -->
		<?php //endif; ?>
	</address>

	<?php if ( $show_shipping ) : ?>

		</div><!-- /.col-1 -->

		<div class="woocommerce-column woocommerce-column--2 woocommerce-column--shipping-address col-2">
			<h2 class="woocommerce-column__title"><?php esc_html_e( 'Shipping address', 'woocommerce' ); ?></h2>
			<address>
				<?php /* CAMBIOS MI CUENTA */ $dataShipping = $order->get_data_shipping_address(); ?>
				<!-- < ?php echo wp_kses_post( $order->get_formatted_shipping_address( esc_html__( 'N/A', 'woocommerce' ) ) ); ?> -->
				<div id="info-shipping">
					<div id="info-one-shipping">
						<h5 style="margin: 5px 0;">Nombre:</h5>
						<span><?php echo $dataDir['first_name'];  echo ' '; echo $dataDir['last_name']; ?></span>
						<h5 style="margin: 5px 0;">Departamento:</h5>
						<span><?php echo $dataDir['state']; ?></span>
						<h5 style="margin: 5px 0;">Ciudad:</h5>
						<span><?php echo $dataDir['city']; ?></span>
						<h5 style="margin: 5px 0;">Dirección 1:</h5>
						<span><?php echo $dataDir['address_1']; ?></span>
						<h5 style="margin: 5px 0;">Dirección 2:</h5>
						<span><?php echo $dataDir['address_2']; ?></span>
					</div>
				</div>
			</address>
		</div><!-- /.col-2 -->

	</section><!-- /.col2-set -->

	<?php endif; ?>

	<?php do_action( 'woocommerce_order_details_after_customer_details', $order ); ?>

</section>
